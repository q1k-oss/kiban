import { Metadata } from "next";

import { ComponentShowcase } from "@/internal/components/component-showcase";
import { CallToAction } from "@/internal/components/cta";
import { Features } from "@/internal/components/features";
import { Footer } from "@/internal/components/footer";
import { Hero } from "@/internal/components/hero";
export const metadata: Metadata = {
  title: "Kiban (基盤)",
  description: "A React UI Component Library - Foundation for your interfaces",
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow main-container">
        <Hero />
        <Features />
        <ComponentShowcase />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
