import Image from 'next/image';
import React from 'react';

import packageJson from '../../../package.json';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.04 11.04 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.15v3.18c0 .31.21.68.8.56C20.22 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

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
              <GithubIcon className="h-5 w-5" />
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
