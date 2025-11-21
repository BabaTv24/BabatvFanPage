import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";
import { useAdminSession } from "@/hooks/useAdminSession";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/Landing";
import Home from "@/pages/Home";
import Checkout from "@/pages/Checkout";
import Admin from "@/pages/Admin";
import AdminLogin from "@/pages/AdminLogin";
import AdminUsers from "@/pages/admin/AdminUsers";
import AdminTransactions from "@/pages/admin/AdminTransactions";
import AdminReferrals from "@/pages/admin/AdminReferrals";
import AdminAds from "@/pages/admin/AdminAds";
import AdminTestimonials from "@/pages/admin/AdminTestimonials";
import AdminClips from "@/pages/admin/AdminClips";
import AdminSettings from "@/pages/admin/AdminSettings";
import Watch from "@/pages/Watch";

function Router() {
  const { isAuthenticated, isLoading } = useAuth();
  const { isAdmin, isLoading: isAdminLoading } = useAdminSession();

  // Show loading state while checking authentication
  if (isLoading || isAdminLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin" component={Admin} />
      <Route path="/admin/users" component={AdminUsers} />
      <Route path="/admin/transactions" component={AdminTransactions} />
      <Route path="/admin/referrals" component={AdminReferrals} />
      <Route path="/admin/ads" component={AdminAds} />
      <Route path="/admin/testimonials" component={AdminTestimonials} />
      <Route path="/admin/clips" component={AdminClips} />
      <Route path="/admin/settings" component={AdminSettings} />
      {isAuthenticated && (
        <>
          <Route path="/home" component={Home} />
          <Route path="/watch" component={Watch} />
        </>
      )}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
