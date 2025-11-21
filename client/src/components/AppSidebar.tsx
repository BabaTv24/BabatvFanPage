import { useLocation } from "wouter";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Gift,
  Megaphone,
  MessageSquare,
  Video,
  Settings,
  LogOut,
  Sparkles
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const menuItems = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Użytkownicy",
    url: "/admin/users",
    icon: Users,
  },
  {
    title: "Transakcje",
    url: "/admin/transactions",
    icon: CreditCard,
  },
  {
    title: "Polecenia",
    url: "/admin/referrals",
    icon: Gift,
  },
];

const contentItems = [
  {
    title: "Reklamy",
    url: "/admin/ads",
    icon: Megaphone,
  },
  {
    title: "Opinie",
    url: "/admin/testimonials",
    icon: MessageSquare,
  },
  {
    title: "Klipy",
    url: "/admin/clips",
    icon: Video,
  },
];

export function AppSidebar() {
  const [location, navigate] = useLocation();
  const { toast } = useToast();

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await apiRequest('POST', '/api/admin/logout', {});
    },
    onSuccess: () => {
      toast({
        title: "Wylogowano",
        description: "Do zobaczenia!",
      });
      navigate('/admin/login');
    },
  });

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-border p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-gold to-gold/60 flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-background" />
          </div>
          <div>
            <h2 className="font-bold text-sm">BABATV24</h2>
            <p className="text-xs text-muted-foreground">Admin Panel</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Przegląd</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location === item.url}
                    data-testid={`sidebar-${item.title.toLowerCase()}`}
                  >
                    <a href={item.url} onClick={(e) => {
                      e.preventDefault();
                      navigate(item.url);
                    }}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Treści</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {contentItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location === item.url}
                    data-testid={`sidebar-${item.title.toLowerCase()}`}
                  >
                    <a href={item.url} onClick={(e) => {
                      e.preventDefault();
                      navigate(item.url);
                    }}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>System</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/admin/settings" onClick={(e) => {
                    e.preventDefault();
                    navigate('/admin/settings');
                  }}>
                    <Settings className="h-4 w-4" />
                    <span>Ustawienia</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => logoutMutation.mutate()}
              disabled={logoutMutation.isPending}
              data-testid="button-admin-logout"
            >
              <LogOut className="h-4 w-4" />
              <span>Wyloguj</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
