import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Hls from "hls.js";

interface TVMonitorProps {
  videoUrl?: string;
  showLiveBadge?: boolean;
}

export function TVMonitor({ videoUrl, showLiveBadge = true }: TVMonitorProps) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);

  useEffect(() => {
    if (!videoUrl || !videoRef.current) return;

    const video = videoRef.current;

    // Check if HLS stream
    if (videoUrl.includes('.m3u8')) {
      if (Hls.isSupported()) {
        // Destroy previous instance if exists
        if (hlsRef.current) {
          hlsRef.current.destroy();
        }

        const hls = new Hls({
          enableWorker: true,
          lowLatencyMode: true,
          backBufferLength: 90,
        });

        hls.loadSource(videoUrl);
        hls.attachMedia(video);
        
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(() => {
            // Auto-play blocked, user needs to interact
          });
        });

        hls.on(Hls.Events.ERROR, (_event, data) => {
          if (data.fatal) {
            switch (data.type) {
              case Hls.ErrorTypes.NETWORK_ERROR:
                hls.startLoad();
                break;
              case Hls.ErrorTypes.MEDIA_ERROR:
                hls.recoverMediaError();
                break;
              default:
                hls.destroy();
                break;
            }
          }
        });

        hlsRef.current = hls;
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Native HLS support (Safari)
        video.src = videoUrl;
        video.play().catch(() => {});
      }
    } else {
      // Regular MP4 video
      video.src = videoUrl;
      video.play().catch(() => {});
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [videoUrl]);

  const handleFullscreen = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* TV Monitor Frame */}
      <div className="relative aspect-video rounded-2xl overflow-hidden neon-border-gold glass-strong p-2">
        {/* Video Container */}
        <div className="relative w-full h-full bg-black rounded-xl overflow-hidden">
          {videoUrl ? (
            <video
              ref={videoRef}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
              data-testid="video-player"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center neon-glow-gold">
                  <div className="w-16 h-16 rounded-full bg-primary/40 animate-pulse" />
                </div>
                <p className="text-muted-foreground text-lg">Ładowanie streamu...</p>
              </div>
            </div>
          )}

          {/* Live Badge */}
          {showLiveBadge && (
            <div className="absolute top-4 right-4">
              <Badge variant="destructive" className="px-3 py-1 text-sm font-bold animate-neon-pulse backdrop-blur-md">
                <span className="inline-block w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                LIVE
              </Badge>
            </div>
          )}

          {/* Controls */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <Button
              size="icon"
              variant="secondary"
              onClick={toggleMute}
              className="backdrop-blur-md bg-black/50 hover:bg-black/70"
              data-testid="button-mute-toggle"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </Button>
            <Button
              size="icon"
              variant="secondary"
              onClick={handleFullscreen}
              className="backdrop-blur-md bg-black/50 hover:bg-black/70"
              data-testid="button-fullscreen"
            >
              <Maximize className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
