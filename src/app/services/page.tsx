import { Navbar } from "@/components/layout/navbar/navbar";
import { Footer } from "@/components/layout/footer/footer";

import { CTA } from "@/components/home/cta/cta";

import { PageHero } from "@/components/shared/page-hero/page-hero";

import { ServicesGrid } from "@/components/services/services-grid";
import { Process } from "@/components/services/process/process";
import { TechStack } from "@/components/services/tech-stack/tech-stack";
import { CaseStudies } from "@/components/services/case-studies/case-studies";
import { FAQ } from "@/components/services/faq/faq";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden">

        {/* HERO */}
        <PageHero
          badge="OUR SERVICES"
          title="Future-Ready"
          highlightedText="Digital Solutions."
          description="
            We create premium digital products, scalable
            applications, AI-powered systems, and immersive
            experiences designed for ambitious businesses.
          "
        />

        {/* SERVICES GRID */}
        <ServicesGrid />

        <Process />

        <TechStack />

        <CaseStudies />

        <FAQ />

        <CaseStudies />

        <FAQ />

        {/* CTA */}
        <CTA />

      </main>

      <Footer />
    </>
  );
}
