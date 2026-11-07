"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const POINTS = [
  { num: "01", title: "Systems first", desc: "I try to understand the system before adding to it. The useful work is usually in the data, the boundaries, and the failure cases." },
  { num: "02", title: "Products, not demos", desc: "I care about software people actually use. LabBuddy is a healthcare marketplace in production, not a class exercise." },
  { num: "03", title: "Full stack, backend leaning", desc: "Next.js and React on the front. FastAPI, Python, and Node where the system lives." },
  { num: "04", title: "Practical AI", desc: "Models belong inside a product: search, retrieval, embeddings. Not a slide about the future." },
  { num: "05", title: "Careful changes", desc: "Production software is mostly the next fix and the next release. I treat those as the work, not the leftover." },
];

export default function WhyMe() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".whyme-header", {
        scrollTrigger: { trigger: ref.current, start: "top 80%", toggleActions: "play none none none" },
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
      });
      gsap.from(".whyme-item", {
        scrollTrigger: { trigger: ref.current, start: "top 75%", toggleActions: "play none none none" },
        x: 30, opacity: 0, stagger: 0.12, duration: 0.8, ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="whyme-section" className="relative w-full px-6 md:px-20 py-24 md:py-32 z-20 overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        <div className="whyme-header w-full lg:w-[40%] flex flex-col">
          <p className="font-sans text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-4 font-medium">How I Work</p>
          <h2 className="font-sans font-black tracking-tighter text-white leading-none mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            Thoughtful software.
          </h2>
          <p className="font-sans text-sm text-white/40 leading-relaxed font-light">
            I like difficult systems more than flashy technology. The goal is software that holds up after it ships.
          </p>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-8 md:gap-10">
          {POINTS.map((item) => (
            <div key={item.num} className="whyme-item group flex gap-5 items-start py-4 border-b border-white/5 last:border-0 hover:border-white/10 transition-colors duration-300">
              <span className="font-mono text-sm md:text-base text-[#ff6b1a]/80 pt-0.5 select-none tracking-wider">{item.num}</span>
              <div>
                <h3 className="font-sans text-base font-bold text-white mb-2 group-hover:text-[#ff6b1a] transition-colors duration-300">{item.title}</h3>
                <p className="font-sans text-xs md:text-sm text-white/35 group-hover:text-white/50 leading-relaxed font-light transition-colors duration-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
