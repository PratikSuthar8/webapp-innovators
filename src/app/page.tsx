import { Navbar } from "@/components/layout/navbar/navbar";
import { Hero } from "@/components/home/hero/hero";
import { Services } from "@/components/home/services/services";
import { Process } from "@/components/home/process/process";
import { Portfolio } from "@/components/home/portfolio/portfolio";
import { Testimonials } from "@/components/home/testimonials/testimonials";
import { CTA } from "@/components/home/cta/cta";
import { Footer } from "@/components/layout/footer/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden">
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
