"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  { num: "01", title: "Understand the system", desc: "Read the problem, the data, and the constraints before choosing a tool." },
  { num: "02", title: "Shape the architecture", desc: "Decide what the services are, where state lives, and what the API should promise." },
  { num: "03", title: "Build the product", desc: "Next.js, React, and TypeScript on the surface. FastAPI, Python, or Node underneath." },
  { num: "04", title: "Ship and stay with it", desc: "Put it in front of people, then fix what breaks. That is most of the work." },
];

export default function Process() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-card", {
        scrollTrigger: { trigger: ref.current, start: "top 80%", toggleActions: "play none none none" },
        y: 40, opacity: 0, stagger: 0.15, duration: 0.8, ease: "power3.out",
      });
      gsap.from(".process-line", {
        scrollTrigger: { trigger: ref.current, start: "top 70%", toggleActions: "play none none none" },
        scaleX: 0, transformOrigin: "left center", duration: 1.2, ease: "power3.inOut",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="process-section" className="relative w-full px-6 md:px-20 py-24 md:py-32 z-20 overflow-hidden">
      <div className="w-full">
        <div className="mb-16 md:mb-20">
          <p className="font-sans text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-4 font-medium">How It Works</p>
          <h2 className="font-sans font-black tracking-tighter text-white leading-none" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
            Process.
          </h2>
        </div>
        <div className="hidden lg:block relative w-full h-px bg-white/10 mb-16">
          <div className="process-line absolute top-0 left-0 w-full h-[1.5px] bg-[#ff6b1a]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {STEPS.map((step) => (
            <div key={step.num} className="process-card group relative flex flex-col items-start">
              <div className="hidden lg:block absolute -top-[70px] left-0 size-3 rounded-full bg-white/20 border border-[#080808] group-hover:bg-[#ff6b1a] group-hover:border-[#ff6b1a] transition-all duration-300 z-10" />
              <span className="font-mono text-xs text-[#ff6b1a] tracking-widest font-black mb-4">{step.num}</span>
              <h3 className="font-sans text-lg font-bold text-white mb-3 tracking-tight">{step.title}</h3>
              <p className="font-sans text-xs md:text-sm text-white/35 group-hover:text-white/50 leading-relaxed font-light transition-colors duration-300">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
