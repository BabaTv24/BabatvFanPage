import { Tv, Smartphone, Tablet, Monitor } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const devices = [
  {
    icon: Tv,
    title: "TV",
    description: "Oglądaj na dużym ekranie w salonie",
    color: "#ff0000",
  },
  {
    icon: Smartphone,
    title: "Smartphone",
    description: "Zawsze pod ręką, gdziekolwiek jesteś",
    color: "#00ff00",
  },
  {
    icon: Tablet,
    title: "Tablet",
    description: "Idealne połączenie mobilności i rozmiaru",
    color: "#00b7ff",
  },
  {
    icon: Monitor,
    title: "PC",
    description: "Pełna jakość na twoim komputerze",
    color: "#ff00ff",
  },
];

export function DeviceGrid() {
  return (
    <section className="py-16 md:py-24 container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 font-display">
        Oglądaj <span className="neon-text-gold">wszędzie</span>
      </h2>
      <p className="text-center text-muted-foreground text-lg mb-12">
        Stabilny streaming na wszystkich urządzeniach. Zero buforowania.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {devices.map((device, index) => (
          <Card
            key={device.title}
            className="glass hover-elevate active-elevate-2 transition-all duration-300 hover:scale-105"
            data-testid={`device-card-${index}`}
          >
            <CardContent className="p-6 text-center space-y-4">
              <div
                className="w-20 h-20 mx-auto rounded-full flex items-center justify-center"
                style={{
                  background: `rgba(${parseInt(device.color.slice(1, 3), 16)}, ${parseInt(device.color.slice(3, 5), 16)}, ${parseInt(device.color.slice(5, 7), 16)}, 0.1)`,
                  filter: `drop-shadow(0 0 15px ${device.color})`,
                }}
              >
                <device.icon className="w-10 h-10" style={{ color: device.color }} />
              </div>
              <h3 className="text-xl font-bold">{device.title}</h3>
              <p className="text-sm text-muted-foreground">{device.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
