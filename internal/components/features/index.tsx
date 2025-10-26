import { Box, Brush, Code2, Cpu, Gauge, Leaf, Puzzle, Terminal } from 'lucide-react';
import React from 'react';

import { GlowingEffect } from '../glowing-effect';

const features = [
  {
    icon: <Puzzle className="h-10 w-10 text-ethereal-purple" />,
    title: "Composable Components",
    description: "Build complex UIs from simple, self-contained components that provide their own styling and behavior."
  },
  {
    icon: <Brush className="h-10 w-10 text-ethereal-teal" />,
    title: "Style Customization",
    description: "Easily customize components with Tailwind CSS classes or override default styles through a powerful theming system."
  },
  {
    icon: <Box className="h-10 w-10 text-ethereal-blue" />,
    title: "Zero Runtime Styles",
    description: "All styling is done with Tailwind CSS, meaning no CSS-in-JS runtime cost for better performance."
  },
  {
    icon: <Cpu className="h-10 w-10 text-ethereal-purple" />,
    title: "Type-Safe APIs",
    description: "Full TypeScript support with comprehensive type definitions for props, variants, and more."
  },
  {
    icon: <Gauge className="h-10 w-10 text-ethereal-teal" />,
    title: "Optimized for Performance",
    description: "Lightweight implementation with minimal dependencies for fast load times and smooth interactions."
  },
  {
    icon: <Terminal className="h-10 w-10 text-ethereal-blue" />,
    title: "Developer Experience",
    description: "Consistent APIs and comprehensive documentation make development a breeze."
  },
  {
    icon: <Code2 className="h-10 w-10 text-ethereal-purple" />,
    title: "Copy & Paste Ready",
    description: "Copy the code for any component and use it directly in your project without complex setup."
  },
  {
    icon: <Leaf className="h-10 w-10 text-ethereal-teal" />,
    title: "Accessibility First",
    description: "Built with accessibility in mind, following WAI-ARIA standards for all interactive elements."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="cyber-grid opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-ethereal-blue/5 to-transparent rounded-full"></div>
      </div>
      
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 inline-block">System Capabilities</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cutting-edge features engineered for the next generation of digital interfaces
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative p-4 md:p-4 rounded-xl border border-[#d6d6d6a3] dark:border-[#4242424f]"
            >
              <GlowingEffect
                blur={0}
                borderWidth={3}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="rounded-xl p-4 md:p-4 shadow-[0px_0px_27px_0px_rgba(0,0,0,0.08)] dark:shadow-[0px_0px_27px_0px_rgba(255,255,255,0.08)] h-full">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 rounded-lg bg-gray-900/70 border border-gray-800">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
