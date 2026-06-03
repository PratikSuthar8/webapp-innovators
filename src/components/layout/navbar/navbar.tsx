"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";

import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  const [mobileMenu, setMobileMenu] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`
          fixed
          left-0
          top-0
          z-[9999]
          w-full
          transition-[padding,background-color,box-shadow,transform]
          duration-500
          ${
            scrolled
              ? "pt-5"
              : "pt-0"
          }
        `}
      >
        <div className="mx-auto max-w-[1720px] px-5 sm:px-6 md:px-5 lg:px-8 lg:px-10 xl:px-14">

          <div
            className={`
              flex
              items-center
              justify-between
              transition-[padding,background-color,box-shadow,transform]
              duration-500
              ${
                scrolled
                  ? `
                    rounded-full
                    border
                    border-transparent
                    bg-white/80
                    px-5
                    py-4
                    shadow-[0_8px_30px_rgba(15,23,42,0.04)]
                    backdrop-blur-xl
                  `
                  : `
                    px-2
                    py-5 lg:py-6
                  `
              }
            `}
          >

            {/* LOGO */}
            <Link
              href="/"
              className="flex items-center gap-4"
            >
              <div
                className="
                  flex
                  h-11 w-11 lg:h-12 lg:w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-blue-600
                  to-cyan-500
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_10px_30px_rgba(14,165,233,0.28)]
                "
              >
                WI
              </div>

              <div className="hidden sm:block">

                <p
                  className="
                    text-[1rem]
                    font-semibold
                    tracking-[-0.03em]
                    text-slate-950
                  "
                >
                  WebApp Innovators
                </p>

                <p
                  className="
                    mt-0.5
                    text-[0.72rem]
                    uppercase
                    tracking-[0.24em]
                    text-slate-500
                  "
                >
                  Digital Experiences
                </p>

              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden items-center gap-1 lg:flex">

              {navItems.map((item) => {
                const active =
                  pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="
                      relative
                      rounded-full
                      px-5
                      py-3
                      text-[0.94rem]
                      font-medium
                      tracking-[-0.02em]
                      text-slate-600
                      transition-[padding,background-color,box-shadow,transform]
                      duration-300
                      hover:text-slate-950
                    "
                  >
                    {/* ACTIVE */}
                    {active && (
                      <motion.div
                        layoutId="navbar-pill"
                        className="
                          absolute
                          inset-0
                          rounded-full
                          bg-gradient-to-r
                          from-blue-600
                          to-cyan-500
                        "
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}

                    <span
                      className={`
                        relative
                        z-10
                        ${
                          active
                            ? "text-white"
                            : ""
                        }
                      `}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="hidden lg:block">

              <button
                className="
                  group/button
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  px-6
                  py-3.5
                  text-[0.84rem]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-white
                  shadow-[0_10px_30px_rgba(14,165,233,0.24)]
                "
              >
                Start Project

                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1" />
              </button>

            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() =>
                setMobileMenu(!mobileMenu)
              }
              className="
                flex
                h-11 w-11 lg:h-12 lg:w-12
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white/80
                text-slate-950
                backdrop-blur-xl
                lg:hidden
              "
            >
              {mobileMenu ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[9998]
              bg-[#f8fbff]/95
              backdrop-blur-xl
              pt-32
            "
          >
            <div className="px-5 lg:px-8">

              <nav className="space-y-2">

                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() =>
                        setMobileMenu(false)
                      }
                      className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-slate-200
                        py-5 lg:py-6
                        text-[1.7rem] lg:text-[2rem]
                        font-bold
                        tracking-[-0.06em]
                        text-slate-950
                      "
                    >
                      {item.label}

                      <ArrowUpRight className="size-6" />
                    </Link>
                  </motion.div>
                ))}

              </nav>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}
