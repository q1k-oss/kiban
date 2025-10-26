import {
  Home,
  Settings,
  User,
  FileText,
  BarChart,
  HelpCircle,
  LogOut,
} from "lucide-react";
import React from "react";

import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarFooter,
  SidebarProvider,
} from "ethereal-ui";

export default function SidebarBasicDemo() {
  return (
    <div className="flex min-h-[500px] border rounded-md overflow-hidden">
      <SidebarProvider>
        <Sidebar className="w-64 border-r bg-muted/20">
          <SidebarHeader className="p-4 border-b">
            <h2 className="text-xl font-semibold">App Name</h2>
            <p className="text-sm text-muted-foreground">Navigation</p>
          </SidebarHeader>
          
          <SidebarMenu className="p-2">
            <SidebarMenuItem className="flex items-center py-2 px-3 rounded-md bg-accent text-accent-foreground">
              <Home className="h-4 w-4 mr-2" />
              <span>Dashboard</span>
            </SidebarMenuItem>
            <SidebarMenuItem className="flex items-center py-2 px-3 rounded-md hover:bg-accent/50">
              <FileText className="h-4 w-4 mr-2" />
              <span>Documents</span>
            </SidebarMenuItem>
            <SidebarMenuItem className="flex items-center py-2 px-3 rounded-md hover:bg-accent/50">
              <BarChart className="h-4 w-4 mr-2" />
              <span>Analytics</span>
            </SidebarMenuItem>
            <SidebarMenuItem className="flex items-center py-2 px-3 rounded-md hover:bg-accent/50">
              <User className="h-4 w-4 mr-2" />
              <span>Profile</span>
            </SidebarMenuItem>
            <SidebarMenuItem className="flex items-center py-2 px-3 rounded-md hover:bg-accent/50">
              <Settings className="h-4 w-4 mr-2" />
              <span>Settings</span>
            </SidebarMenuItem>
          </SidebarMenu>
          
          <SidebarFooter className="p-2 mt-auto border-t">
            <SidebarMenu>
              <SidebarMenuItem className="flex items-center py-2 px-3 rounded-md hover:bg-accent/50">
                <HelpCircle className="h-4 w-4 mr-2" />
                <span>Help & Support</span>
              </SidebarMenuItem>
              <SidebarMenuItem className="flex items-center py-2 px-3 rounded-md hover:bg-accent/50">
                <LogOut className="h-4 w-4 mr-2" />
                <span>Log Out</span>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
      </SidebarProvider>
      
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="text-muted-foreground">
          This is the main content area that would contain your application's primary information.
        </p>
      </div>
    </div>
  );
} 