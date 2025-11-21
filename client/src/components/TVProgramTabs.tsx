import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Tv, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import type { TVProgramResponse } from "@shared/schema";

export function TVProgramTabs() {
  // Use default fetcher (configured in queryClient) - no custom queryFn needed
  const { data: polishData, isLoading: polishLoading } = useQuery<TVProgramResponse>({
    queryKey: ['/api/tvprogram?country=polska'],
  });

  const { data: germanData, isLoading: germanLoading } = useQuery<TVProgramResponse>({
    queryKey: ['/api/tvprogram?country=germany'],
  });

  const { data: liveData, isLoading: liveLoading } = useQuery<TVProgramResponse>({
    queryKey: ['/api/tvprogram?country=live'],
  });

  const polishProgram = polishData?.programs || [];
  const germanProgram = germanData?.programs || [];
  const liveNow = liveData?.programs || [];

  const renderProgramList = (programs: TVProgramResponse['programs'], isLoading: boolean) => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      );
    }

    if (programs.length === 0) {
      return (
        <div className="text-center py-12 text-muted-foreground">
          <p>Brak dostępnych programów</p>
        </div>
      );
    }

    return (
      <div className="space-y-3">
        {programs.map((program, index) => (
          <div
            key={index}
            className="glass rounded-lg p-4 flex items-center justify-between hover-elevate transition-all"
            data-testid={`program-item-${index}`}
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center min-w-[64px] h-16 rounded-lg bg-primary/10 text-primary font-bold text-sm px-2">
                {program.time}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg">{program.title}</h4>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <Tv className="w-3 h-3" />
                  {program.channel}
                  {program.category && (
                    <>
                      <span className="mx-1">•</span>
                      <span>{program.category}</span>
                    </>
                  )}
                </p>
                {program.description && (
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {program.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 md:py-24 container mx-auto px-4">
      <Card className="glass-strong">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold text-center font-display">
            Program <span className="neon-text-gold">TV</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="polska" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="polska" data-testid="tab-polska">Polska</TabsTrigger>
              <TabsTrigger value="de" data-testid="tab-de">DE</TabsTrigger>
              <TabsTrigger value="live" data-testid="tab-live">Live Teraz</TabsTrigger>
            </TabsList>
            <TabsContent value="polska" className="space-y-4">
              {renderProgramList(polishProgram, polishLoading)}
              {polishData?.externalUrl && (
                <div className="text-center mt-6">
                  <Button 
                    variant="outline" 
                    className="gap-2" 
                    onClick={() => window.open(polishData.externalUrl, '_blank')}
                    data-testid="button-view-full-polish"
                  >
                    Pełny program TV
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </TabsContent>
            <TabsContent value="de" className="space-y-4">
              {renderProgramList(germanProgram, germanLoading)}
              {germanData?.externalUrl && (
                <div className="text-center mt-6">
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    onClick={() => window.open(germanData.externalUrl, '_blank')}
                    data-testid="button-view-full-german"
                  >
                    Vollständiges Programm
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </TabsContent>
            <TabsContent value="live" className="space-y-4">
              {renderProgramList(liveNow, liveLoading)}
              {liveData?.externalUrl && (
                <div className="text-center mt-6">
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    onClick={() => window.open(liveData.externalUrl, '_blank')}
                    data-testid="button-view-all-live"
                  >
                    Wszystkie kanały LIVE
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
}
