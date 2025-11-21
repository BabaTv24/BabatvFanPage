import { useQuery } from "@tanstack/react-query";
import type { AdSlot } from "@shared/schema";

export function AdTicker() {
  const { data: adSlots = [] } = useQuery<AdSlot[]>({
    queryKey: ["/api/ads"],
  });

  const activeAds = adSlots.filter((ad) => ad.active).sort((a, b) => a.position - b.position);

  // Duplicate ads for seamless loop
  const displayAds = [...activeAds, ...activeAds];

  return (
    <div className="w-full overflow-hidden border-y border-border bg-card/50 backdrop-blur-md py-4">
      <div className="flex gap-6 animate-marquee">
        {displayAds.map((ad, index) => (
          <a
            key={`${ad.id}-${index}`}
            href={ad.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 glass rounded-lg px-6 py-3 hover-elevate active-elevate-2 transition-transform min-w-[300px]"
            data-testid={`ad-slot-${ad.position}-${index}`}
          >
            <img
              src={ad.logoUrl}
              alt={ad.title}
              className="w-12 h-12 object-contain rounded"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-sm text-foreground">
                {ad.title}
              </span>
              <span className="text-xs text-muted-foreground line-clamp-1">
                {ad.text}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
