import { Github } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import packageJson from '../../../package.json';


export const Footer = () => {
  return (
    <footer className="relative py-24 border-t border-zinc-300/50 dark:border-gray-800/50 bg-white dark:bg-black overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 w-[800px] h-[400px] -translate-x-1/2 bg-gradient-radial from-ethereal-purple/3 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Brand section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <a href="#" className="inline-flex items-center space-x-3 group">
                <div className="p-2 rounded-lg glassy border group-hover:border-ethereal-purple/30 transition-colors duration-300">
                  <Image src="/favicon-96x96.png" alt="Ethereal Garden Logo" width={32} height={32} />
                </div>
                <span className="text-2xl font-semibold">
                  Ethereal Garden
                </span>
              </a>
              <p className="text-zinc-800 dark:text-gray-400 text-lg leading-relaxed max-w-md">
                Next-generation React components engineered for the cyberpunk era. 
                Build interfaces that transcend reality.
              </p>
            </div>
            
            {/* Social links */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/Invier/ethereal-garden" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 rounded-lg glassy border hover:border-ethereal-purple/40 transition-all duration-300"
              >
                <Github className="h-5 w-5 text-zinc-800 dark:text-gray-400 group-hover:text-ethereal-purple transition-colors duration-300" />
                <span className="sr-only">GitHub Repository</span>
              </a>
              {/* <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 rounded-lg glassy border hover:border-ethereal-teal/40 transition-all duration-300"
              >
                <Twitter className="h-5 w-5 text-zinc-800 dark:text-gray-400 group-hover:text-ethereal-teal transition-colors duration-300" />
                <span className="sr-only">Twitter Profile</span>
              </a> */}
              {/* <div className="p-3 rounded-lg glassy border">
                <Zap className="h-5 w-5 text-zinc-800 dark:text-gray-400" />
              </div> */}
            </div>
          </div>
          
          {/* Status and legal section */}
          <div className="lg:text-right space-y-8">
            {/* System status */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-lg glassy border">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-zinc-800 dark:text-gray-400 font-medium">System Status: Online</span>
              </div>
              <div className="space-y-3">
                <div className="text-sm text-zinc-800 dark:text-gray-400">
                  Neural Network: Active
                </div>
                <div className="text-sm text-zinc-800 dark:text-gray-400">
                  Protocol Version: {packageJson.version}
                </div>
              </div>
            </div>
            
            {/* Legal */}
            <div className="space-y-3 pt-8 border-t border-zinc-300/50 dark:border-gray-800/50">
              <p className="text-sm text-zinc-800 dark:text-gray-400">
                Built with ❤️ by <a href="https://github.com/Invier" target="_blank" rel="noopener noreferrer" className="text-ethereal-purple">Invier</a>
              </p>
              <p className="text-xs text-zinc-800 dark:text-gray-400">
                Ethereal Garden - A React Component Library
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
