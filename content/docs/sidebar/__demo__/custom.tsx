'use client'

import {
  Home,
  Settings,
  FileText,
  Users,
  Bell,
  Mail,
  LayoutDashboard,
  Calendar,
  HelpCircle,
  LogOut,
  ChevronDown,
  Inbox,
  MoreHorizontal,
} from "lucide-react";
import React, { useState } from "react";

import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarFooter,
  Button,
  Avatar,
  AvatarImage,
  AvatarFallback,
  Badge,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  SidebarProvider,
} from "ethereal-ui";

export default function SidebarCustomDemo() {
  const [activeItem, setActiveItem] = useState("dashboard");
  
  // Sample notification count
  const notificationCount = 5;
  const messageCount = 3;
  
  return (
    <div className="flex min-h-[500px] border rounded-md overflow-hidden">
      <SidebarProvider>
        <Sidebar className="w-64 border-r bg-primary text-primary-foreground">
          {/* Header with User Profile */}
          <SidebarHeader className="p-4 border-b border-primary-foreground/10">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">John Doe</div>
                <div className="text-xs text-primary-foreground/70">Administrator</div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="ml-auto h-8 w-8 text-primary-foreground">
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
          <SidebarMenu className="p-2">
            {/* Dashboard */}
            <SidebarMenuItem 
              className={`flex items-center py-2 px-3 rounded-md mb-1 ${
                activeItem === "dashboard" 
                  ? "bg-primary-foreground text-primary" 
                  : "text-primary-foreground hover:bg-primary-foreground/10"
              }`}
              onClick={() => setActiveItem("dashboard")}
            >
              <LayoutDashboard className="h-4 w-4 mr-2" />
              <span>Dashboard</span>
            </SidebarMenuItem>
            
            {/* Inbox with notification badge */}
            <SidebarMenuItem 
              className={`flex items-center justify-between py-2 px-3 rounded-md mb-1 ${
                activeItem === "inbox" 
                  ? "bg-primary-foreground text-primary" 
                  : "text-primary-foreground hover:bg-primary-foreground/10"
              }`}
              onClick={() => setActiveItem("inbox")}
            >
              <div className="flex items-center">
                <Inbox className="h-4 w-4 mr-2" />
                <span>Inbox</span>
              </div>
              {messageCount > 0 && (
                <Badge variant="secondary" className="ml-auto text-xs">
                  {messageCount}
                </Badge>
              )}
            </SidebarMenuItem>
            
            {/* Calendar */}
            <SidebarMenuItem 
              className={`flex items-center py-2 px-3 rounded-md mb-1 ${
                activeItem === "calendar" 
                  ? "bg-primary-foreground text-primary" 
                  : "text-primary-foreground hover:bg-primary-foreground/10"
              }`}
              onClick={() => setActiveItem("calendar")}
            >
              <Calendar className="h-4 w-4 mr-2" />
              <span>Calendar</span>
            </SidebarMenuItem>
            
            {/* Documents - expandable section */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuItem 
                  className={`flex items-center justify-between py-2 px-3 rounded-md mb-1 ${
                    activeItem.startsWith("doc") 
                      ? "bg-primary-foreground text-primary" 
                      : "text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    <span>Documents</span>
                  </div>
                  <ChevronDown className="h-4 w-4 ml-2" />
                </SidebarMenuItem>
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
            
            {/* Team */}
            <SidebarMenuItem 
              className={`flex items-center py-2 px-3 rounded-md mb-1 ${
                activeItem === "team" 
                  ? "bg-primary-foreground text-primary" 
                  : "text-primary-foreground hover:bg-primary-foreground/10"
              }`}
              onClick={() => setActiveItem("team")}
            >
              <Users className="h-4 w-4 mr-2" />
              <span>Team</span>
            </SidebarMenuItem>
            
            {/* Notifications with count */}
            <SidebarMenuItem 
              className={`flex items-center justify-between py-2 px-3 rounded-md mb-1 ${
                activeItem === "notifications" 
                  ? "bg-primary-foreground text-primary" 
                  : "text-primary-foreground hover:bg-primary-foreground/10"
              }`}
              onClick={() => setActiveItem("notifications")}
            >
              <div className="flex items-center">
                <Bell className="h-4 w-4 mr-2" />
                <span>Notifications</span>
              </div>
              {notificationCount > 0 && (
                <Badge variant="destructive" className="ml-auto text-xs">
                  {notificationCount}
                </Badge>
              )}
            </SidebarMenuItem>
          </SidebarMenu>
          
          {/* Footer */}
          <SidebarFooter className="p-2 mt-auto border-t border-primary-foreground/10">
            <SidebarMenu>
              <SidebarMenuItem 
                className="flex items-center py-2 px-3 rounded-md text-primary-foreground hover:bg-primary-foreground/10"
              >
                <HelpCircle className="h-4 w-4 mr-2" />
                <span>Help Center</span>
              </SidebarMenuItem>
              <SidebarMenuItem 
                className="flex items-center py-2 px-3 rounded-md text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Settings className="h-4 w-4 mr-2" />
                <span>Settings</span>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
      </SidebarProvider>
      
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
    </div>
  );
}

// User component for dropdown menu
const User = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}; 