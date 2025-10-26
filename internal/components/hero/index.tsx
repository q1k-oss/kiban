import { ArrowRight, Code2, Zap } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Button, ScrollArea } from 'ethereal-ui';

import CodeBlock from '../codeblock';


export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40 pb-24 cyber-grid">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 dark:bg-ethereal-purple/80 bg-ethereal-purple/40 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ethereal-teal/80 opacity-20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-ethereal-blue/10 to-transparent rounded-full"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-amber-50/30 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-800 rounded-full px-4 py-2 text-sm backdrop-blur-sm">
              <Zap className="w-4 h-4 text-ethereal-purple" />
              <span className="text-zinc-700 dark:text-gray-300">Next-generation UI components</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter max-w-4xl gradient-text leading-tight">
              Ethereal Garden
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-zinc-800 dark:text-gray-300  max-w-3xl">
              Beautiful React Components for the Future
            </h2>
            <p className="text-zinc-600 dark:text-gray-400 text-lg md:text-xl max-w-[42rem] mx-auto leading-relaxed">
              A professionally crafted React component library with cyberpunk aesthetics.
              Build stunning interfaces that push the boundaries of design.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#get-started" className="cursor-pointer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-ethereal-purple to-ethereal-teal hover:opacity-90 transition-all duration-300 shadow-lg shadow-ethereal-purple/25 neon-glow text-lg px-8 py-4 h-auto cursor-pointer"
              >
                  Initialize System
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <Link href="/docs" className="cursor-pointer">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 bg-gray-900/50 hover:bg-gray-800/80 text-gray-300 backdrop-blur-sm text-lg px-8 py-4 h-auto cursor-pointer"
              >
                <Code2 className="mr-2 h-5 w-5" />
                Access Documentation
              </Button>
            </Link>
          </div>

          <div className="relative w-full max-w-5xl mx-auto mt-16 h-[400px]">
            <div className="absolute inset-0 rounded-2xl animate-glow">
              <div className="code-block h-full relative">
                <div className="absolute top-4 left-4 flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <ScrollArea className="h-full text-left pt-4">
                  <CodeBlock
                    code={`
import React from 'react'
import { Button, Card, Badge } from 'ethereal-ui'

export default function CyberInterface() {
  return (
    <div className="flex gap-6 p-8 bg-black">
      <Card className="glassy neon-glow">
        <h3 className="gradient-text">Neural Network</h3>
        <p>Advanced AI-powered components</p>
      </Card>
      
      <Button variant="cyber" className="animate-pulse">
        Execute Protocol
      </Button>
      
      <Badge variant="hologram">
        Status: Online
      </Badge>
    </div>
  )
}`}
                  />
                </ScrollArea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
