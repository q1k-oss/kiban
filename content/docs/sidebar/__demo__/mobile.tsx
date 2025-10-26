'use client'

import {
  Home,
  Settings,
  User,
  FileText,
  BarChart,
  HelpCircle,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import React, { useState, useEffect } from "react";

import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarFooter,
  Button,
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SidebarProvider,
} from "ethereal-ui";

export default function SidebarMobileDemo() {
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if screen is mobile on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Sidebar content component to avoid duplication
  const SidebarContent = ({ onItemClick = () => {} }) => (
    <>
      <SidebarHeader className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">App Name</h2>
          {isMobile && (
            <SheetClose asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </SheetClose>
          )}
        </div>
        <p className="text-sm text-muted-foreground">Navigation</p>
      </SidebarHeader>
      
      <SidebarMenu className="p-2">
        <SidebarMenuItem 
          className="flex items-center py-2 px-3 rounded-md bg-accent text-accent-foreground"
          onClick={onItemClick}
        >
          <Home className="h-4 w-4 mr-2" />
          <span>Dashboard</span>
        </SidebarMenuItem>
        <SidebarMenuItem 
          className="flex items-center py-2 px-3 rounded-md hover:bg-accent/50"
          onClick={onItemClick}
        >
          <FileText className="h-4 w-4 mr-2" />
          <span>Documents</span>
        </SidebarMenuItem>
        <SidebarMenuItem 
          className="flex items-center py-2 px-3 rounded-md hover:bg-accent/50"
          onClick={onItemClick}
        >
          <BarChart className="h-4 w-4 mr-2" />
          <span>Analytics</span>
        </SidebarMenuItem>
        <SidebarMenuItem 
          className="flex items-center py-2 px-3 rounded-md hover:bg-accent/50"
          onClick={onItemClick}
        >
          <User className="h-4 w-4 mr-2" />
          <span>Profile</span>
        </SidebarMenuItem>
        <SidebarMenuItem 
          className="flex items-center py-2 px-3 rounded-md hover:bg-accent/50"
          onClick={onItemClick}
        >
          <Settings className="h-4 w-4 mr-2" />
          <span>Settings</span>
        </SidebarMenuItem>
      </SidebarMenu>
      
      <SidebarFooter className="p-2 mt-auto border-t">
        <SidebarMenu>
          <SidebarMenuItem 
            className="flex items-center py-2 px-3 rounded-md hover:bg-accent/50"
            onClick={onItemClick}
          >
            <HelpCircle className="h-4 w-4 mr-2" />
            <span>Help & Support</span>
          </SidebarMenuItem>
          <SidebarMenuItem 
            className="flex items-center py-2 px-3 rounded-md hover:bg-accent/50"
            onClick={onItemClick}
          >
            <LogOut className="h-4 w-4 mr-2" />
            <span>Log Out</span>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
  
  return (
    <div className="min-h-[500px] border rounded-md overflow-hidden">
      {/* Mobile View */}
      {isMobile && (
        <>
          <div className="flex items-center p-4 border-b">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="mr-4">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-64">
                <Sidebar className="w-full h-full border-none">
                  <SidebarContent />
                </Sidebar>
              </SheetContent>
            </Sheet>
            <h1 className="text-xl font-bold">Dashboard</h1>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground mb-4">
              This is the mobile view with a slide-out sidebar menu. Click the menu button to open.
            </p>
            <p className="mb-2 text-sm">Try resizing your window to see it switch between:</p>
            <ul className="list-disc pl-5 text-sm">
              <li>Mobile: Sheet/Drawer-based sidebar</li>
              <li>Desktop: Permanent sidebar</li>
            </ul>
          </div>
        </>
      )}
      
      {/* Desktop View */}
      {!isMobile && (
        <div className="flex h-full">
          <SidebarProvider>
            <Sidebar className="w-64 border-r bg-muted/20">
              <SidebarContent />
            </Sidebar>
          </SidebarProvider>
          
          <div className="flex-1 p-6">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p className="text-muted-foreground mb-4">
              This is the desktop view with a permanent sidebar.
            </p>
            <p className="mb-2 text-sm">Try resizing your window to see it switch between:</p>
            <ul className="list-disc pl-5 text-sm">
              <li>Mobile: Sheet/Drawer-based sidebar</li>
              <li>Desktop: Permanent sidebar</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
} 