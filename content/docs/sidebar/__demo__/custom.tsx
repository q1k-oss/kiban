"use client"

import {
  Settings,
  FileText,
  Users,
  Bell,
  LayoutDashboard,
  Calendar,
  HelpCircle,
  LogOut,
  ChevronDown,
  Inbox,
  MoreHorizontal,
  User,
} from "lucide-react";
import { useState } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuBadge,
  SidebarFooter,
  Button,
  Avatar,
  AvatarImage,
  AvatarFallback,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  SidebarProvider,
  SidebarInset,
} from "@happect/ethereal-ui";

export default function SidebarCustomDemo() {
  const [activeItem, setActiveItem] = useState("dashboard");
  
  // Sample notification count
  const notificationCount = 5;
  const messageCount = 3;
  
  return (
    <div className="min-h-[500px] border rounded-md overflow-hidden">
      <SidebarProvider>
        <Sidebar collapsible="none" className="bg-primary text-primary-foreground">
          {/* Header with User Profile */}
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">John Doe</div>
                <div className="text-xs text-primary-foreground/70 truncate">Administrator</div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-foreground">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </SidebarHeader>
          
          {/* Main Menu */}
          <SidebarContent>
            <SidebarMenu>
              {/* Dashboard */}
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeItem === "dashboard"}
                  onClick={() => setActiveItem("dashboard")}
                  className="bg-primary-foreground/10 text-primary-foreground data-[active=true]:bg-primary-foreground data-[active=true]:text-primary"
                >
                  <LayoutDashboard />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              {/* Inbox with notification badge */}
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeItem === "inbox"}
                  onClick={() => setActiveItem("inbox")}
                  className="bg-primary-foreground/10 text-primary-foreground data-[active=true]:bg-primary-foreground data-[active=true]:text-primary"
                >
                  <Inbox />
                  <span>Inbox</span>
                  {messageCount > 0 && (
                    <SidebarMenuBadge>{messageCount}</SidebarMenuBadge>
                  )}
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              {/* Calendar */}
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeItem === "calendar"}
                  onClick={() => setActiveItem("calendar")}
                  className="bg-primary-foreground/10 text-primary-foreground data-[active=true]:bg-primary-foreground data-[active=true]:text-primary"
                >
                  <Calendar />
                  <span>Calendar</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              {/* Documents - expandable section */}
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton 
                      isActive={activeItem.startsWith("doc")}
                      className="bg-primary-foreground/10 text-primary-foreground data-[active=true]:bg-primary-foreground data-[active=true]:text-primary"
                    >
                      <FileText />
                      <span>Documents</span>
                      <ChevronDown className="ml-auto" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" side="right">
                    <DropdownMenuItem onClick={() => setActiveItem("doc-recent")}>
                      Recent Files
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setActiveItem("doc-shared")}>
                      Shared with me
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setActiveItem("doc-starred")}>
                      Starred
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
              
              {/* Team */}
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeItem === "team"}
                  onClick={() => setActiveItem("team")}
                  className="bg-primary-foreground/10 text-primary-foreground data-[active=true]:bg-primary-foreground data-[active=true]:text-primary"
                >
                  <Users />
                  <span>Team</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              {/* Notifications with count */}
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeItem === "notifications"}
                  onClick={() => setActiveItem("notifications")}
                  className="bg-primary-foreground/10 text-primary-foreground data-[active=true]:bg-primary-foreground data-[active=true]:text-primary"
                >
                  <Bell />
                  <span>Notifications</span>
                  {notificationCount > 0 && (
                    <SidebarMenuBadge>{notificationCount}</SidebarMenuBadge>
                  )}
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          
          {/* Footer */}
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="bg-primary-foreground/10 text-primary-foreground">
                  <HelpCircle />
                  <span>Help Center</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="bg-primary-foreground/10 text-primary-foreground">
                  <Settings />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        
        <SidebarInset>
          <div className="flex-1 p-6">
            <h1 className="text-2xl font-bold mb-4">
              {activeItem === "dashboard" && "Dashboard"}
              {activeItem === "inbox" && "Inbox"}
              {activeItem === "calendar" && "Calendar"}
              {activeItem.startsWith("doc") && "Documents"}
              {activeItem === "team" && "Team"}
              {activeItem === "notifications" && "Notifications"}
            </h1>
            <p className="text-muted-foreground mb-4">
              This demo showcases a custom styled sidebar with several advanced features:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Custom color scheme using the primary color</li>
              <li>User profile with dropdown menu</li>
              <li>Notification badges for inbox and alerts</li>
              <li>Nested dropdown menu for documents section</li>
              <li>Active state highlighting</li>
            </ul>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
} 