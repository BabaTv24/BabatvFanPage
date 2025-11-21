import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import type { Testimonial } from "@shared/schema";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function TestimonialsCarousel() {
  const { data: testimonials = [] } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  const activeTestimonials = testimonials.filter((t) => t.active);

  return (
    <section className="py-16 md:py-24 container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 font-display">
        Co mówią <span className="neon-text-gold">użytkownicy</span>
      </h2>
      <p className="text-center text-muted-foreground text-lg mb-12">
        Dołącz do tysięcy zadowolonych widzów
      </p>

      {/* Desktop: 3x3 Grid */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {activeTestimonials.slice(0, 9).map((testimonial, index) => (
          <Card key={testimonial.id} className="glass hover-elevate transition-all" data-testid={`testimonial-card-${index}`}>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/50"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">"{testimonial.quote}"</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mobile: Carousel */}
      <div className="md:hidden">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {activeTestimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id}>
                <Card className="glass" data-testid={`testimonial-card-mobile-${index}`}>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatarUrl}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/50"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <div className="flex gap-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
