import { useState, useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SocialProofNotification {
  id: string;
  name: string;
  city: string;
  plan: string;
  minutesAgo: number;
}

interface SocialProofNotificationsProps {
  disabled?: boolean;
}

const SAMPLE_NOTIFICATIONS: SocialProofNotification[] = [
  { id: "1", name: "Kamil", city: "Warszawa", plan: "Entry", minutesAgo: 2 },
  { id: "2", name: "Anna", city: "Kraków", plan: "Entry", minutesAgo: 5 },
  { id: "3", name: "Piotr", city: "Wrocław", plan: "Entry", minutesAgo: 8 },
  { id: "4", name: "Magda", city: "Gdańsk", plan: "Entry", minutesAgo: 12 },
  { id: "5", name: "Tomasz", city: "Poznań", plan: "Entry", minutesAgo: 15 },
  { id: "6", name: "Ola", city: "Łódź", plan: "Entry", minutesAgo: 18 },
  { id: "7", name: "Jakub", city: "Katowice", plan: "Entry", minutesAgo: 22 },
  { id: "8", name: "Kasia", city: "Szczecin", plan: "Entry", minutesAgo: 27 },
  { id: "9", name: "Michał", city: "Lublin", plan: "Entry", minutesAgo: 31 },
  { id: "10", name: "Zosia", city: "Białystok", plan: "Entry", minutesAgo: 35 },
];

export function SocialProofNotifications({ disabled = false }: SocialProofNotificationsProps) {
  const [currentNotification, setCurrentNotification] = useState<SocialProofNotification | null>(null);
  const [notificationIndex, setNotificationIndex] = useState(0);
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    // Don't start if disabled (e.g., during intro)
    if (disabled) return;
    // Clear all timers on cleanup to prevent leaks
    const clearAllTimers = () => {
      timersRef.current.forEach(timer => clearTimeout(timer));
      timersRef.current = [];
    };

    // Continuous loop: show notification → wait → show next
    const showNotification = (index: number) => {
      setNotificationIndex(index);
      setCurrentNotification(SAMPLE_NOTIFICATIONS[index]);
      
      // Hide after 5 seconds
      const hideTimer = setTimeout(() => {
        setCurrentNotification(null);
        
        // Show next notification after 10 second gap
        const showNextTimer = setTimeout(() => {
          const nextIndex = (index + 1) % SAMPLE_NOTIFICATIONS.length;
          showNotification(nextIndex);
        }, 10000);
        
        timersRef.current.push(showNextTimer);
      }, 5000);
      
      timersRef.current.push(hideTimer);
    };

    // Start first notification after 3 second delay
    const initialTimer = setTimeout(() => {
      showNotification(0);
    }, 3000);
    
    timersRef.current.push(initialTimer);

    return clearAllTimers;
  }, [disabled]);

  return (
    <AnimatePresence mode="wait">
      {currentNotification && (
        <motion.div
          key={currentNotification.id}
          initial={{ opacity: 0, y: 50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 50, x: "-50%" }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-1/2 z-50 pointer-events-none"
          data-testid="social-proof-notification"
        >
          <div className="glass-strong rounded-lg p-4 border border-primary/20 shadow-2xl min-w-[300px] max-w-md">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-green-500 neon-glow-gold" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm" data-testid="notification-text">
                  <span className="text-primary">{currentNotification.name}</span> z {currentNotification.city}
                </p>
                <p className="text-xs text-muted-foreground">
                  Kupił {currentNotification.plan} • {currentNotification.minutesAgo} min temu
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
