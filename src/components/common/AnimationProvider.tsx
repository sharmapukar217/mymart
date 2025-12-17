"use client";

import { useGSAP } from "@gsap/react";
import AOS from "aos";
import gsap from "gsap";
import { type LenisRef, ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP);

export function AnimationProvider({ children }: React.PropsWithChildren) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    AOS.init({ once: true });

    const update = (time: number) => lenisRef.current?.lenis?.raf(time * 1000);

    gsap.ticker.add(update);
    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}
