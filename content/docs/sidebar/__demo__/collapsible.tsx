'use client'

import {
  Home,
  Settings,
  User,
  FileText,
  BarChart,
  HelpCircle,
  LogOut,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import React, { useState } from "react";

import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarFooter,
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  SidebarProvider,
} from "ethereal-ui";

export default function SidebarCollapsibleDemo() {
  const [collapsed, setCollapsed] = useState(false);
  
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  
  return (
    <div className="flex min-h-[500px] border rounded-md overflow-hidden">
      <SidebarProvider>
        <Sidebar className={`${collapsed ? 'w-16' : 'w-64'} border-r bg-muted/20 transition-all duration-300`}>
          <SidebarHeader className={`p-4 border-b flex ${collapsed ? 'justify-center' : 'justify-between'} items-center`}>
            {!collapsed && <h2 className="text-xl font-semibold">App Name</h2>}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleSidebar} 
              className="h-8 w-8"
            >
              {collapsed ? <ChevronsRight className="h-4 w-4" /> : <ChevronsLeft className="h-4 w-4" />}
            </Button>
          </SidebarHeader>
          
          <SidebarMenu className="p-2">
            <TooltipProvider>
              {/* Dashboard */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuItem className={`flex items-center py-2 px-3 rounded-md bg-accent text-accent-foreground ${collapsed ? 'justify-center' : ''}`}>
                    <Home className="h-4 w-4 mr-2" />
                    {!collapsed && <span>Dashboard</span>}
                  </SidebarMenuItem>
                </TooltipTrigger>
                {collapsed && <TooltipContent side="right">Dashboard</TooltipContent>}
              </Tooltip>
              
              {/* Documents */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuItem className={`flex items-center py-2 px-3 rounded-md hover:bg-accent/50 ${collapsed ? 'justify-center' : ''}`}>
                    <FileText className="h-4 w-4 mr-2" />
                    {!collapsed && <span>Documents</span>}
                  </SidebarMenuItem>
                </TooltipTrigger>
                {collapsed && <TooltipContent side="right">Documents</TooltipContent>}
              </Tooltip>
              
              {/* Analytics */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuItem className={`flex items-center py-2 px-3 rounded-md hover:bg-accent/50 ${collapsed ? 'justify-center' : ''}`}>
                    <BarChart className="h-4 w-4 mr-2" />
                    {!collapsed && <span>Analytics</span>}
                  </SidebarMenuItem>
                </TooltipTrigger>
                {collapsed && <TooltipContent side="right">Analytics</TooltipContent>}
              </Tooltip>
              
              {/* Profile */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuItem className={`flex items-center py-2 px-3 rounded-md hover:bg-accent/50 ${collapsed ? 'justify-center' : ''}`}>
                    <User className="h-4 w-4 mr-2" />
                    {!collapsed && <span>Profile</span>}
                  </SidebarMenuItem>
                </TooltipTrigger>
                {collapsed && <TooltipContent side="right">Profile</TooltipContent>}
              </Tooltip>
              
              {/* Settings */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuItem className={`flex items-center py-2 px-3 rounded-md hover:bg-accent/50 ${collapsed ? 'justify-center' : ''}`}>
                    <Settings className="h-4 w-4 mr-2" />
                    {!collapsed && <span>Settings</span>}
                  </SidebarMenuItem>
                </TooltipTrigger>
                {collapsed && <TooltipContent side="right">Settings</TooltipContent>}
              </Tooltip>
            </TooltipProvider>
          </SidebarMenu>
          
          <SidebarFooter className="p-2 mt-auto border-t">
            <SidebarMenu>
              <TooltipProvider>
                {/* Help */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SidebarMenuItem className={`flex items-center py-2 px-3 rounded-md hover:bg-accent/50 ${collapsed ? 'justify-center' : ''}`}>
                      <HelpCircle className="h-4 w-4 mr-2" />
                      {!collapsed && <span>Help & Support</span>}
                    </SidebarMenuItem>
                  </TooltipTrigger>
                  {collapsed && <TooltipContent side="right">Help & Support</TooltipContent>}
                </Tooltip>
                
                {/* Logout */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SidebarMenuItem className={`flex items-center py-2 px-3 rounded-md hover:bg-accent/50 ${collapsed ? 'justify-center' : ''}`}>
                      <LogOut className="h-4 w-4 mr-2" />
                      {!collapsed && <span>Log Out</span>}
                    </SidebarMenuItem>
                  </TooltipTrigger>
                  {collapsed && <TooltipContent side="right">Log Out</TooltipContent>}
                </Tooltip>
              </TooltipProvider>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
      </SidebarProvider>
      
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p className="text-muted-foreground mb-4">
          This demo shows a collapsible sidebar. Click the toggle button in the sidebar header to collapse or expand it.
        </p>
        <p className="text-muted-foreground">
          When collapsed, tooltips appear on hover to show the menu item labels.
        </p>
      </div>
    </div>
  );
} 