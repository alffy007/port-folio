"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { ArchitectureSection } from "@/components/architecture-section";
import { GallerySection } from "@/components/gallery-section";
import { Footer } from "@/components/footer";

export default function SimpliDocAIPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <GallerySection />
      <TechStackSection />
      <ArchitectureSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}

