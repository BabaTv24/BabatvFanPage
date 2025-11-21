import { Facebook, Twitter, Send, MessageCircle, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { SiDiscord, SiWhatsapp } from "react-icons/si";

interface ShareBarProps {
  refCode: string;
  userId?: string;
}

export function ShareBar({ refCode, userId }: ShareBarProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const shareUrl = `${window.location.origin}/r/${refCode}`;
  const ogImageUrl = `${window.location.origin}/api/og/image/${refCode}`;
  const shareText = `Sprawdź BABATV24 - oglądaj TV online za jedyne 0,99€! Użyj mojego linku: ${shareUrl}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast({
        title: "Skopiowano!",
        description: "Link polecający został skopiowany do schowka",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Błąd",
        description: "Nie udało się skopiować linku",
        variant: "destructive",
      });
    }
  };

  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&picture=${encodeURIComponent(ogImageUrl)}`,
      color: "#1877F2",
    },
    {
      name: "X (Twitter)",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`,
      color: "#1DA1F2",
    },
    {
      name: "Telegram",
      icon: Send,
      url: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      color: "#0088cc",
    },
    {
      name: "WhatsApp",
      icon: SiWhatsapp,
      url: `https://wa.me/?text=${encodeURIComponent(shareText)}`,
      color: "#25D366",
    },
    {
      name: "Discord",
      icon: SiDiscord,
      url: `https://discord.com/channels/@me`,
      color: "#5865F2",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-4 p-6 glass-strong rounded-lg">
      <h3 className="text-lg font-semibold">Poleć znajomym</h3>
      <p className="text-sm text-muted-foreground text-center">
        3 polecenia = darmowy dostęp | 10 poleceń = 50% zniżki na PRO
      </p>
      
      <div className="flex flex-wrap gap-2 justify-center">
        {shareLinks.map((link) => (
          <Button
            key={link.name}
            size="icon"
            variant="secondary"
            className="hover-elevate active-elevate-2"
            onClick={() => window.open(link.url, "_blank")}
            style={{
              borderColor: link.color,
              boxShadow: `0 0 10px ${link.color}40`,
            }}
            data-testid={`share-${link.name.toLowerCase()}`}
          >
            <link.icon className="w-5 h-5" style={{ color: link.color }} />
          </Button>
        ))}
        <Button
          size="icon"
          variant="secondary"
          className="hover-elevate active-elevate-2"
          onClick={copyToClipboard}
          data-testid="button-copy-link"
        >
          {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
        </Button>
      </div>

      <div className="w-full p-3 bg-muted/20 rounded border border-border text-center">
        <code className="text-xs text-primary break-all" data-testid="text-referral-link">{shareUrl}</code>
      </div>
    </div>
  );
}
