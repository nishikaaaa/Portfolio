"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  { q: "What are you studying?", a: "B.Tech in Computer Science Engineering at Guru Tegh Bahadur 4th Century Engineering College, Guru Gobind Singh Indraprastha University. Expected graduation is 2027." },
  { q: "What did you work on at LabBuddy?", a: "LabBuddy is a healthcare marketplace. I joined on the frontend and continued across the stack, with Next.js, React, TypeScript, Redux Toolkit, FastAPI, Python, and MySQL. The product is in production and serves more than 5,000 users." },
  { q: "What are you building now?", a: "Shotkut, an AI stock footage platform, and a misinformation detection system that uses language models, retrieval, OCR, and embeddings. Other work includes SoulNest and SatQuery." },
  { q: "How can someone reach you?", a: "Email nishikasindhwanins@gmail.com, or use the contact form on this site." },
];

export default function Faq() {
  const ref = useRef(null);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-item", {
        scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none none" },
        y: 30, opacity: 0, stagger: 0.1, duration: 0.7, ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="faq-section" className="relative w-full px-6 md:px-20 py-24 md:py-32 z-20 overflow-hidden">
      <div className="w-full">
        <div className="mb-16 md:mb-20">
          <p className="font-sans text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-4 font-medium">Questions</p>
          <h2 className="font-sans font-black tracking-tighter text-white leading-none" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
            FAQ.
          </h2>
        </div>
        <div className="flex flex-col border-t border-white/5">
          {ITEMS.map((item, i) => {
            const expanded = open === i;
            return (
              <div key={item.q} className="faq-item border-b border-white/5 last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpen(expanded ? null : i)}
                  className="w-full py-6 md:py-8 flex justify-between items-center text-left gap-6 group"
                  aria-expanded={expanded}
                >
                  <span className="font-sans text-sm md:text-[17px] font-bold text-white/70 group-hover:text-white transition-colors duration-300">{item.q}</span>
                  <span className="relative size-5 shrink-0 flex items-center justify-center border border-white/10 group-hover:border-[#ff6b1a]/30 rounded-full transition-colors duration-300">
                    <span className="absolute w-2 h-[1px] bg-white group-hover:bg-[#ff6b1a] transition-colors" />
                    <span className={`absolute w-[1px] h-2 bg-white group-hover:bg-[#ff6b1a] transition-all duration-300 ${expanded ? "rotate-90 opacity-0" : ""}`} />
                  </span>
                </button>
                <div
                  className="grid transition-all duration-500 ease-in-out"
                  style={{ gridTemplateRows: expanded ? "1fr" : "0fr", opacity: expanded ? 1 : 0 }}
                >
                  <div className="overflow-hidden">
                    <p className="font-sans text-xs md:text-sm text-white/40 leading-relaxed font-light pb-6 md:pb-8 pr-12">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
