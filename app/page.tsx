"use client"
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SEA from "@/components/SEA";
import WhyHire from "@/components/WhyHire";
import { useEffect } from "react";

import Lenis from "lenis";
import 'lenis/dist/lenis.css'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <Hero />
      <WhyHire />
      <SEA />
      <Projects />
    </>
  );
}
