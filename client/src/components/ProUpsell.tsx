import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

export function ProUpsell() {
  const entryFeatures = [
    "30 dni dostępu",
    "Stabilny streaming",
    "Wsparcie techniczne",
    "Dostęp podstawowy",
  ];

  const proFeatures = [
    "Nieograniczony dostęp",
    "Wybór kanałów premium",
    "4K Ultra HD",
    "Bez reklam",
    "Priorytetowe wsparcie",
    "Nagrywanie programów",
  ];

  return (
    <section className="py-16 md:py-24 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
          Chcesz <span className="neon-text-gold">więcej</span>?
        </h2>
        <p className="text-xl text-muted-foreground">
          Dołącz za 12,99 €/miesiąc i sam wybieraj, co chcesz oglądać
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Entry Plan */}
        <Card className="glass">
          <CardContent className="p-8 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Entry</h3>
              <p className="text-3xl font-bold neon-text-gold">
                0,99 €
                <span className="text-base text-muted-foreground font-normal"> / jednorazowo</span>
              </p>
            </div>
            <ul className="space-y-3">
              {entryFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* PRO Plan */}
        <Card className="glass-strong border-2 neon-border-gold relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-bl-lg font-semibold text-sm flex items-center gap-1">
            <Sparkles className="w-4 h-4" />
            PREMIUM
          </div>
          <CardContent className="p-8 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">PRO</h3>
              <p className="text-3xl font-bold neon-text-gold">
                12,99 €
                <span className="text-base text-muted-foreground font-normal"> / miesiąc</span>
              </p>
            </div>
            <ul className="space-y-3">
              {proFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full neon-glow-gold" size="lg" data-testid="button-pro-info">
              Proszę o więcej informacji
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
