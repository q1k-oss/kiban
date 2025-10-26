'use client'

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  Button,
} from "ethereal-ui";

export default function NavigationMenuResponsiveDemo() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle screen size changes
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="relative">
      {/* Mobile menu button */}
      {isMobile && (
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-semibold">Ethereal Garden</span>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      )}

      {/* Desktop Navigation */}
      {!isMobile && (
        <NavigationMenu className="justify-center">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-400 to-indigo-600 p-6 no-underline outline-none focus:shadow-md"
                      href="#"
                    >
                      <div className="text-lg font-medium text-white">Ethereal Garden</div>
                      <p className="text-sm leading-tight text-white/90">
                        A beautiful garden of UI components for your applications
                      </p>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="#"
                    >
                      <div className="text-sm font-medium leading-none">Introduction</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Learn about the basics of Ethereal Garden components
                      </p>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="#"
                    >
                      <div className="text-sm font-medium leading-none">Installation</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        How to install and set up Ethereal Garden in your project
                      </p>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="#"
                    >
                      <div className="text-sm font-medium leading-none">Typography</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Styles for headings, paragraphs, and other text elements
                      </p>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {[
                    { title: "Buttons", description: "Interactive buttons with various styles" },
                    { title: "Cards", description: "Containers for displaying content" },
                    { title: "Dialogs", description: "Modal dialogs for important interactions" },
                    { title: "Forms", description: "Input components for capturing user data" },
                    { title: "Navigation", description: "Components for site navigation" },
                    { title: "Feedback", description: "Alerts, notifications, and progress indicators" },
                  ].map((component) => (
                    <li key={component.title}>
                      <NavigationMenuLink
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">{component.title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {component.description}
                        </p>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                href="#"
              >
                Documentation
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuViewport />
        </NavigationMenu>
      )}

      {/* Mobile Navigation */}
      {isMobile && isMenuOpen && (
        <div className="absolute z-10 w-full bg-background border shadow-lg">
          <nav className="p-4">
            <ul className="space-y-4">
              <li className="border-b pb-2">
                <div className="font-medium mb-2">Getting Started</div>
                <ul className="pl-4 space-y-2">
                  <li><a href="#" className="text-sm hover:underline">Introduction</a></li>
                  <li><a href="#" className="text-sm hover:underline">Installation</a></li>
                  <li><a href="#" className="text-sm hover:underline">Typography</a></li>
                </ul>
              </li>
              <li className="border-b pb-2">
                <div className="font-medium mb-2">Components</div>
                <ul className="pl-4 space-y-2 grid grid-cols-2">
                  <li><a href="#" className="text-sm hover:underline">Buttons</a></li>
                  <li><a href="#" className="text-sm hover:underline">Cards</a></li>
                  <li><a href="#" className="text-sm hover:underline">Dialogs</a></li>
                  <li><a href="#" className="text-sm hover:underline">Forms</a></li>
                  <li><a href="#" className="text-sm hover:underline">Navigation</a></li>
                  <li><a href="#" className="text-sm hover:underline">Feedback</a></li>
                </ul>
              </li>
              <li>
                <a href="#" className="font-medium hover:underline">Documentation</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
} 