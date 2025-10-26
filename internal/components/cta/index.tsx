import { ArrowRight, Terminal, Download } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

export const CallToAction = () => {
  return (
    <section id="get-started" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-ethereal-teal/20 to-transparent"></div>
        <div className="cyber-grid opacity-30"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Initialize Your Future Interface</h2>
            <p className="text-gray-400 text-xl leading-relaxed">
              Join the cybernetic revolution. Deploy cutting-edge React components 
              that redefine the boundaries of digital aesthetics.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="https://github.com/Invier/ethereal-garden"
              target="_blank"
              className="cursor-pointer"
            >
              <Button 
                size="lg" 
                className="border-gray-700 bg-gray-900/50 hover:bg-gray-800/80 text-gray-300 backdrop-blur-sm text-lg px-10 py-6 h-auto cursor-pointer" 
              >
                <Terminal className="mr-3 h-5 w-5" />
                Access Repository
              </Button>
            </Link>
          </div>
          
          <div className="glassy p-6 rounded-2xl mt-12">
            <div className="flex items-center space-x-2 mb-4">
              <Terminal className="h-4 w-4 text-ethereal-purple" />
              <span className="text-xs text-gray-500 uppercase tracking-wider">Terminal Command</span>
            </div>
            <code className="text-ethereal-teal font-mono text-lg">
              npm install ethereal-ui
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};
