import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CreditCard, Wallet, Bitcoin } from "lucide-react";
import { useLocation } from "wouter";

interface PaymentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PaymentModal({ open, onOpenChange }: PaymentModalProps) {
  const [, navigate] = useLocation();

  const handleStripeCheckout = () => {
    navigate("/checkout");
  };

  const paymentMethods = [
    {
      id: "stripe",
      name: "Karta płatnicza",
      description: "Visa, Mastercard, Apple Pay, Google Pay",
      icon: CreditCard,
      onClick: handleStripeCheckout,
      available: true,
    },
    {
      id: "paypal",
      name: "PayPal",
      description: "Szybka płatność przez PayPal",
      icon: Wallet,
      onClick: () => {},
      available: false,
    },
    {
      id: "crypto",
      name: "Kryptowaluty",
      description: "Bitcoin, Ethereum i inne",
      icon: Bitcoin,
      onClick: () => {},
      available: false,
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md glass-strong">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold neon-text-gold">
            Rezerwuj dostęp za 0,99 €
          </DialogTitle>
          <DialogDescription className="text-base">
            30 dni nielimitowanego oglądania + wsparcie techniczne
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3 mt-4">
          {paymentMethods.map((method) => (
            <Button
              key={method.id}
              variant="outline"
              className="w-full h-auto p-4 flex items-start gap-4 hover-elevate active-elevate-2 disabled:opacity-50"
              onClick={method.onClick}
              disabled={!method.available}
              data-testid={`button-payment-${method.id}`}
            >
              <method.icon className="w-6 h-6 mt-1 flex-shrink-0" />
              <div className="flex-1 text-left">
                <p className="font-semibold text-base">{method.name}</p>
                <p className="text-sm text-muted-foreground">{method.description}</p>
                {!method.available && (
                  <p className="text-xs text-yellow-500 mt-1">Wkrótce dostępne</p>
                )}
              </div>
            </Button>
          ))}
        </div>
        <div className="mt-4 p-4 glass rounded-lg space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Gwarancja:</span>
            <span className="font-semibold">30 dni dostępu</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Wsparcie:</span>
            <span className="font-semibold">24/7 Pomoc techniczna</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
