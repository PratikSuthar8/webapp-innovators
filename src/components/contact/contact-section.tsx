"use client";

import { Container } from "@/components/shared/container/container";

import { ContactInfo } from "./contact-info";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-20 lg:py-32">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#f8fbff]" />

      {/* GLOW */}
      <div className="absolute right-[-120px] top-[120px] h-[320px] w-[320px] rounded-full bg-blue-200/20 blur-[100px]" />

      <Container className="relative z-10 max-w-[1480px]">

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

          {/* LEFT */}
          <ContactInfo />

          {/* RIGHT */}
          <ContactForm />

        </div>
      </Container>
    </section>
  );
}
