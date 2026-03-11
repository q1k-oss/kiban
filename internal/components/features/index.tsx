import { Accessibility, Box, Code2, Cpu, Gauge, Layers, Paintbrush, Puzzle } from 'lucide-react';
import React from 'react';

import { GlowingEffect } from '../glowing-effect';

const features = [
  {
    icon: <Puzzle className="h-5 w-5" />,
    title: "Composable",
    description: "Build complex UIs from small, self-contained components with consistent APIs."
  },
  {
    icon: <Paintbrush className="h-5 w-5" />,
    title: "Customizable",
    description: "Tailwind CSS classes and a powerful theming system for full style control."
  },
  {
    icon: <Box className="h-5 w-5" />,
    title: "Zero Runtime CSS",
    description: "No CSS-in-JS overhead. Tailwind-only styling for optimal performance."
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    title: "Type-Safe",
    description: "Full TypeScript support with comprehensive type definitions."
  },
  {
    icon: <Gauge className="h-5 w-5" />,
    title: "Lightweight",
    description: "Minimal dependencies and tree-shakable for fast load times."
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Copy & Paste",
    description: "Use components directly. No complex setup or configuration needed."
  },
  {
    icon: <Accessibility className="h-5 w-5" />,
    title: "Accessible",
    description: "Built on Radix UI primitives, following WAI-ARIA standards."
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "50+ Components",
    description: "From buttons to data tables, everything you need to ship fast."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Built for developers</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Everything you need to build production-ready interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative rounded-xl border border-white/[0.08] p-1"
            >
              <GlowingEffect
                blur={0}
                borderWidth={2}
                spread={60}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="rounded-lg bg-[#0a0a0a] p-5 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-md bg-white/[0.04] border border-white/[0.08] text-gray-400">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-100">{feature.title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
