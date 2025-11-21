import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  targetDate: Date;
  title?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({ targetDate, title = "Promocja kończy się za:" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const difference = +targetDate - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      // Clear interval when expired to prevent wasteful updates
      if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && 
          newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const { days, hours, minutes, seconds } = timeLeft;
  const isExpired = days === 0 && hours === 0 && minutes === 0 && seconds === 0;

  if (isExpired) {
    return null;
  }

  return (
    <div className="glass-strong rounded-xl p-6 border border-primary/20" data-testid="countdown-timer">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        <TimeUnit value={days} label="Dni" data-testid="countdown-days" />
        <TimeUnit value={hours} label="Godz" data-testid="countdown-hours" />
        <TimeUnit value={minutes} label="Min" data-testid="countdown-minutes" />
        <TimeUnit value={seconds} label="Sek" data-testid="countdown-seconds" />
      </div>
    </div>
  );
}

interface TimeUnitProps {
  value: number;
  label: string;
  "data-testid"?: string;
}

function TimeUnit({ value, label, "data-testid": testId }: TimeUnitProps) {
  return (
    <div className="flex flex-col items-center" data-testid={testId}>
      <div className="bg-primary/10 rounded-lg p-3 min-w-[60px] mb-2 neon-glow-gold">
        <div className="text-2xl md:text-3xl font-bold text-primary text-center">
          {String(value).padStart(2, '0')}
        </div>
      </div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
