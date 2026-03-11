import { Github } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import packageJson from '../../../package.json';

export const Footer = () => {
  return (
    <footer className="border-t border-white/[0.06] bg-black py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-3">
            <a href="#" className="inline-flex items-center gap-2.5 group">
              <Image src="/favicon-96x96.png" alt="Kiban Logo" width={24} height={24} />
              <span className="text-lg font-semibold text-gray-100">
                Kiban (基盤)
              </span>
            </a>
            <p className="text-sm text-gray-500 max-w-sm">
              The foundation for your React interfaces. Open source under MIT.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-xs text-gray-600 font-mono">v{packageJson.version}</span>
            <a
              href="https://github.com/q1k-oss/kiban"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04]">
          <p className="text-xs text-gray-600">
            Built by{' '}
            <a
              href="https://github.com/q1k-oss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              q1k-oss
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
