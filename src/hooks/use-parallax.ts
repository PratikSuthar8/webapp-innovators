"use client";

import { useEffect, RefObject } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useParallax(
  ref: RefObject<HTMLElement | null>,
  y: number = 100
) {
  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      y,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        scrub: true,
      },
    });
  }, [ref, y]);
}
