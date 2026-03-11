import { ArrowRight, Terminal } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

export const CallToAction = () => {
  return (
    <section id="get-started" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#5c4a1e]/6 rounded-full blur-[128px]"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Start building today</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Install Kiban and start building beautiful interfaces in minutes.
          </p>

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-white/[0.08] bg-[#0a0a0a] font-mono text-sm">
            <Terminal className="h-4 w-4 text-gray-500" />
            <code className="text-gray-300">npm install @q1k-oss/kiban</code>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <Link href="/docs">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 h-11 px-6 cursor-pointer"
              >
                Read the docs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link
              href="https://github.com/q1k-oss/kiban"
              target="_blank"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white/[0.1] text-gray-300 hover:bg-white/[0.05] h-11 px-6 cursor-pointer"
              >
                View on GitHub
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
