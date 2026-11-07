"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Cta() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-content", {
        scrollTrigger: { trigger: ref.current, start: "top 80%", toggleActions: "play none none none" },
        y: 50, opacity: 0, duration: 0.8, ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="cta-section" className="relative w-full px-6 md:px-20 py-24 md:py-36 z-20 overflow-hidden">
      <div className="w-full bg-white/[0.01] border border-white/5 rounded-3xl p-8 md:p-16 text-left cta-content relative">
        <div className="absolute -top-20 -right-20 size-60 rounded-full bg-[#ff6b1a]/5 blur-[80px] pointer-events-none" />
        <p className="font-sans text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-6 font-bold">Next Phase</p>
        <h2 className="font-sans font-black tracking-tighter text-white leading-none mb-6" style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}>
          Ready to build something great?
        </h2>
        <p className="font-sans text-sm md:text-base text-white/40 leading-relaxed font-light mb-12 max-w-xl">
          Let’s discuss your objectives, design parameters, and construct a premium web solution built for maximum conversion.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ff6b1a] hover:bg-[#ff8c42] text-black font-black uppercase tracking-[0.2em] rounded-xl text-xs transition-colors duration-300 shadow-lg shadow-[#ff6b1a]/10"
          >
            Start a Project
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 hover:border-white/30 text-white font-bold uppercase tracking-[0.2em] rounded-xl text-xs transition-colors duration-300 bg-transparent"
          >
            View My Work
          </Link>
        </div>
      </div>
    </section>
  );
}
