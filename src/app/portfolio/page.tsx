import { Navbar } from "@/components/layout/navbar/navbar";
import { Footer } from "@/components/layout/footer/footer";

import { CTA } from "@/components/home/cta/cta";

import { PageHero } from "@/components/shared/page-hero/page-hero";

import { CinematicShowcase } from "@/components/portfolio/cinematic-showcase/cinematic-showcase";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden">

        {/* HERO */}
        <PageHero
          badge="OUR PORTFOLIO"
          title="Crafting Premium"
          highlightedText="Digital Experiences."
          description="
            Explore immersive digital products,
            cinematic user experiences, and scalable
            ecosystems crafted for ambitious brands.
          "
        />

        {/* CINEMATIC SHOWCASE */}
        <CinematicShowcase />

        {/* CTA */}
        <CTA />

      </main>

      <Footer />
    </>
  );
}
