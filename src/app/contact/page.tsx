import { Navbar } from "@/components/layout/navbar/navbar";
import { Footer } from "@/components/layout/footer/footer";

import { PageHero } from "@/components/shared/page-hero/page-hero";

import { ContactSection } from "@/components/contact/contact-section";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden">

        {/* HERO */}
        <PageHero
          badge="CONTACT US"
          title="Let’s Create"
          highlightedText="Something Amazing."
          description="
            Have a project in mind? Let’s collaborate to
            create immersive digital experiences, scalable
            systems, and premium products for your business.
          "
        />

        {/* CONTACT */}
        <ContactSection />

      </main>

      <Footer />
    </>
  );
}
