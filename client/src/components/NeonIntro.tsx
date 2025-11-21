import { useEffect, useState } from "react";

export function NeonIntro({ onComplete }: { onComplete?: () => void }) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      onComplete?.();
    }, 4000); // Show for 4 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!showIntro) return null;

  const letters = [
    { char: "B", color: "#ff0000", delay: 0 },
    { char: "A", color: "#ff7f00", delay: 0.2 },
    { char: "B", color: "#ffff00", delay: 0.4 },
    { char: "A", color: "#00ff00", delay: 0.6 },
    { char: "T", color: "#00b7ff", delay: 0.8 },
    { char: "V", color: "#0040ff", delay: 1.0 },
    { char: "2", color: "#ff00ff", delay: 1.2 },
    { char: "4", color: "#ff0090", delay: 1.4 },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="flex gap-3 font-display text-8xl md:text-9xl font-black">
        {letters.map((letter, i) => (
          <span
            key={i}
            className="inline-block animate-letter-enter animate-letter-shake animate-neon-blink"
            style={{
              color: letter.color,
              filter: `drop-shadow(0 0 20px ${letter.color})`,
              animationDelay: `${letter.delay}s, 2s, 2.5s`,
              animationDuration: "1.2s, 0.3s, 1.5s",
              animationIterationCount: "1, infinite, infinite",
              animationDirection: "normal, alternate, normal",
            }}
          >
            {letter.char}
          </span>
        ))}
      </div>
    </div>
  );
}
