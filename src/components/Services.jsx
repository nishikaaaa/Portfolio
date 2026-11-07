"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ItalicText from "./ItalicText";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    num: "01",
    title: "Full-Stack Products",
    desc: "I build *products* across the interface and the API, with Next.js, React, and TypeScript.",
    tags: ["Next.js", "React", "TypeScript", "Product"],
    deliverables: "Web applications, authenticated flows, and the APIs behind them.",
  },
  {
    num: "02",
    title: "Backend Systems",
    desc: "I spend most of my time on *systems*: data models, services, and APIs that stay understandable.",
    tags: ["FastAPI", "Python", "MySQL", "Node.js"],
    deliverables: "Service design, REST APIs, and data layers in Python or Node.",
  },
  {
    num: "03",
    title: "Applied AI",
    desc: "I put *models* inside products: search, retrieval, and the pipelines around them.",
    tags: ["OpenAI", "RAG", "Embeddings", "Pinecone"],
    deliverables: "Semantic search, retrieval flows, and model-backed features.",
  },
  {
    num: "04",
    title: "Production Software",
    desc: "I care about software *people use*, including the fixes and releases after the first version.",
    tags: ["Auth", "APIs", "Releases", "Bugs"],
    deliverables: "Shipped features, production fixes, and careful changes to live systems.",
  },
];

export default function Services() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-row", {
        scrollTrigger: { trigger: ref.current, start: "top 80%", toggleActions: "play none none none" },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const onMove = (e) => {
    const el = e.currentTarget;
    const box = el.getBoundingClientRect();
    el.style.setProperty("--mouse-x", `${e.clientX - box.left}px`);
    el.style.setProperty("--mouse-y", `${e.clientY - box.top}px`);
  };

  return (
    <section ref={ref} id="services-section" className="relative w-full px-6 md:px-20 py-24 md:py-32 z-20 overflow-hidden">
      <div className="w-full">
        <div className="mb-16 md:mb-20">
          <p className="font-sans text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-4 font-medium">What I Do</p>
          <h2 className="font-sans font-black tracking-tighter text-white leading-none" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
            Services.
          </h2>
        </div>

        <div className="flex flex-col border-t border-white/10">
          {SERVICES.map((service, i) => (
            <div
              key={service.num}
              onMouseMove={onMove}
              className="service-row group relative w-full border-b border-white/10 overflow-hidden py-12 md:py-16 transition-colors duration-500 hover:bg-white/[0.01]"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                style={{ background: "radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255, 107, 26, 0.08), transparent)" }}
              />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#ff6b1a] group-hover:w-full transition-all duration-700 ease-out z-10" />

              {i % 2 === 0 ? (
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                  <div className="md:col-span-5 flex items-baseline gap-4 md:gap-6 transform transition-transform duration-300 ease-out group-hover:translate-x-2">
                    <span className="font-mono text-xl md:text-2xl text-white/20 group-hover:text-[#ff6b1a] transition-colors duration-300 font-bold">{service.num}</span>
                    <h3 className="font-sans text-2xl md:text-3xl font-black text-white tracking-tight uppercase leading-none">{service.title}</h3>
                  </div>
                  <ServiceCopy service={service} />
                </div>
              ) : (
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                  <div className="md:col-span-5 md:col-start-8 md:order-2 flex items-baseline justify-start md:justify-end gap-4 md:gap-6 transform transition-transform duration-300 ease-out group-hover:-translate-x-2">
                    <span className="font-mono text-xl md:text-2xl text-white/20 group-hover:text-[#ff6b1a] transition-colors duration-300 font-bold md:order-2">{service.num}</span>
                    <h3 className="font-sans text-2xl md:text-3xl font-black text-white tracking-tight uppercase leading-none md:order-1 md:text-right">{service.title}</h3>
                  </div>
                  <div className="md:col-span-7 md:col-start-1 md:order-1">
                    <ServiceCopy service={service} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#ff6b1a] animate-pulse" />
            <span className="text-xs text-white/50 font-mono">Free Utilities: QR Code Studio PRO & PDF Suite Available</span>
          </div>
          <Link
            href="/services"
            className="group px-6 py-3 rounded-full bg-white/5 hover:bg-[#ff6b1a] border border-white/10 hover:border-[#ff6b1a] text-xs font-bold uppercase tracking-wider text-white hover:text-black transition-all duration-300 flex items-center gap-2"
          >
            <span>Explore All Services & Tools</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCopy({ service }) {
  return (
    <div className="md:col-span-7 flex flex-col gap-4">
      <p className="font-sans text-sm md:text-base text-white/40 group-hover:text-white/70 font-light leading-relaxed transition-colors duration-300">
        <ItalicText text={service.desc} />
      </p>
      <p className="font-sans text-[11px] text-white/30 group-hover:text-white/50 transition-colors duration-300 font-mono">
        <span className="text-[#ff6b1a] mr-2">—</span>
        {" Focus: "}
        {service.deliverables}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {service.tags.map((tag) => (
          <span key={tag} className="px-2.5 py-1 bg-white/[0.02] border border-white/5 rounded-md text-[9px] text-white/35 uppercase tracking-widest font-mono">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
