import { ArrowRight, Package } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Badge, Button } from "@q1k-oss/kiban";

import { TetrisGrid } from "./tetris-grid";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40 pb-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#5c4a1e]/8 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#4a3c18]/6 rounded-full blur-[128px]"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge
            variant="outline"
            className="border-white/[0.08] bg-white/[0.04] text-gray-400 px-4 py-1.5 backdrop-blur-sm"
          >
            <Package className="w-3.5 h-3.5 mr-2" />
            Open Source React Component Library
          </Badge>

          <div className="space-y-4 max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="gradient-text">Kiban</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              The foundation for your React interfaces. 50+ accessible,
              customizable components that fit together perfectly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link href="/docs">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 transition-colors text-sm px-6 h-11 cursor-pointer"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <div className="flex items-center gap-2 px-4 h-11 rounded-md border border-white/[0.08] bg-white/[0.04] font-mono text-sm text-gray-300 select-all cursor-text">
              npm install @q1k-oss/kiban
            </div>
          </div>
        </div>

        <TetrisGrid />
      </div>
    </section>
  );
};
