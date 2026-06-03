"use client";

import Link from "next/link";

import {
  ArrowUpRight,
  Globe,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/shared/container/container";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Web Design",
  "Web Development",
  "Mobile Apps",
  "AI Automation",
  "UI/UX Systems",
];

const socials = [
  {
    icon: Globe,
    href: "#",
  },
  {
    icon: Mail,
    href: "#",
  },
  {
    icon: Phone,
    href: "#",
  },
  {
    icon: Sparkles,
    href: "#",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020817] pt-28 text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0">

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />

        <div className="absolute left-[-200px] top-[100px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[90px]" />

        <div className="absolute right-[-200px] bottom-[50px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[90px]" />
      </div>

      <Container className="relative z-10 max-w-[1480px]">

        {/* TOP */}
        <div className="grid gap-16 border-b border-white/10 pb-16 md:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">

          {/* BRAND */}
          <div>

            <Link
              href="/"
              className="flex items-center gap-4"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-[1.9rem] font-bold tracking-[-0.05em] text-white shadow-[0_20px_60px_rgba(14,165,233,0.35)]">
                WA
              </div>

              <div>
                <h2 className="text-[2rem] font-bold tracking-[-0.06em] text-white">
                  WebApp Innovators
                </h2>

                <p className="mt-1 text-sm text-white/40">
                  Modern Digital Agency
                </p>
              </div>
            </Link>

            <p className="mt-8 max-w-[420px] text-[1rem] leading-[1.9] text-white/60">
              We craft premium digital experiences,
              scalable systems, and modern platforms
              designed for ambitious startups and
              businesses worldwide.
            </p>

            {/* SOCIALS */}
            <div className="mt-8 flex items-center gap-4">

              {socials.map((social, index) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="
                      group
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      text-white/60
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:border-cyan-400/40
                      hover:bg-cyan-400
                      hover:text-white
                    "
                  >
                    <Icon className="size-5 transition-transform duration-300 group-hover:scale-110" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-[1.2rem] font-semibold tracking-[-0.03em] text-white">
              Quick Links
            </h3>

            <div className="mt-8 flex flex-col gap-5">

              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-[1rem]
                    text-white/60
                    transition-all
                    duration-300
                    hover:text-cyan-400
                  "
                >
                  {link.label}

                  <ArrowUpRight className="size-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-[1.2rem] font-semibold tracking-[-0.03em] text-white">
              Services
            </h3>

            <div className="mt-8 flex flex-col gap-5">

              {services.map((service) => (
                <div
                  key={service}
                  className="
                    cursor-pointer
                    text-[1rem]
                    text-white/60
                    transition-all
                    duration-300
                    hover:text-cyan-400
                  "
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-[1.2rem] font-semibold tracking-[-0.03em] text-white">
              Contact
            </h3>

            <div className="mt-8 space-y-7">

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/30">
                  Email
                </p>

                <a
                  href="mailto:hello@webappinnovators.com"
                  className="mt-3 block text-[1rem] text-white/70 transition-colors duration-300 hover:text-cyan-400"
                >
                  hello@webappinnovators.com
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/30">
                  Phone
                </p>

                <a
                  href="tel:+919999999999"
                  className="mt-3 block text-[1rem] text-white/70 transition-colors duration-300 hover:text-cyan-400"
                >
                  +91 99999 99999
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/30">
                  Location
                </p>

                <p className="mt-3 text-[1rem] leading-[1.8] text-white/70">
                  Surat, Gujarat
                  <br />
                  India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-5 py-8 text-center lg:flex-row lg:text-left">

          <p className="text-sm text-white/40">
            © 2026 WebApp Innovators. All rights reserved.
          </p>

          <div className="flex items-center gap-8">

            <Link
              href="#"
              className="text-sm text-white/40 transition-colors duration-300 hover:text-cyan-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="text-sm text-white/40 transition-colors duration-300 hover:text-cyan-400"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
