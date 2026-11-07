"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ItalicText from "./ItalicText";

gsap.registerPlugin(ScrollTrigger);

const SECTION = { label: "Selected Work", heading: "Projects." };

const FALLBACK = [
  {
    id: "shotkut",
    title: "Shotkut",
    category: "Applied AI",
    description: "An AI stock footage platform. Current work is semantic search and video editing.",
  },
  {
    id: "misinformation",
    title: "Misinformation Detection",
    category: "Applied AI",
    description: "A detection system using language models, retrieval, OCR, and embeddings.",
  },
  {
    id: "soulnest",
    title: "SoulNest",
    category: "Product",
    description: "Commerce software on Next.js, FastAPI, React, TypeScript, and MySQL.",
  },
];

function categoryLabel(category) {
  const value = (category || "").toLowerCase();
  if (value.includes("web") || value.includes("site")) return "Full Stack";
  if (value.includes("design") || value.includes("poster") || value.includes("ui") || value.includes("graphic")) return "Product";
  if (value.includes("photo") || value.includes("image") || value.includes("pic")) return "Product";
  if (value.includes("video") || value.includes("motion") || value.includes("film") || value.includes("edit")) return "Applied AI";
  return category || "Software";
}

export default function Work() {
  const ref = useRef(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/works")
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => {
        const visible = (data || []).filter((item) => item.visible).slice(0, 3);
        setProjects(visible.length > 0 ? visible : FALLBACK);
      })
      .catch(() => setProjects(FALLBACK))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (loading || projects.length === 0 || !ref.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".work-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: { trigger: item, start: "top 90%", toggleActions: "play none none none" },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    }, ref);
    return () => ctx.revert();
  }, [loading, projects]);

  return (
    <section
      ref={ref}
      id="work-section"
      className="relative w-full min-h-screen px-6 md:px-20 pt-24 pb-28 md:pt-48 md:pb-56 flex flex-col justify-center z-20"
    >
      <div className="w-full">
        <div className="mb-14 md:mb-20">
          <p className="font-sans text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-4 font-medium">{SECTION.label}</p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2 className="font-sans font-black tracking-tighter text-white leading-none" style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}>
              {SECTION.heading}
            </h2>
            <div className="flex flex-wrap gap-2 lg:pb-2">
              {["Website", "Design", "Video"].map((cat) => (
                <Link
                  key={cat}
                  href={`/projects?cat=${cat.toLowerCase()}`}
                  className="px-4 py-2 rounded-full text-[10px] md:text-xs font-medium tracking-widest uppercase transition-all duration-300 bg-transparent text-white/40 border border-white/10 hover:text-white hover:border-white/30"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          {loading ? (
            <div className="text-white/20 text-xs tracking-widest uppercase py-10 font-mono">Loading projects...</div>
          ) : (
            projects.map((project, i) => (
              <Link
                key={project.id}
                href={`/project/${project.id}`}
                className="work-item group relative flex items-start gap-4 md:gap-8 py-10 md:py-14 border-b border-white/8 hover:border-white/20 transition-all duration-500"
              >
                <div className="absolute left-0 top-0 bottom-0 w-px bg-[#ff6b1a] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
                <div className="pl-3 shrink-0 w-8 pt-1">
                  <span className="font-mono text-[10px] text-white/20 group-hover:text-[#ff6b1a] tracking-widest transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex-1 min-w-0 translate-x-0 group-hover:translate-x-1.5 transition-transform duration-500 ease-out">
                  <p className="font-sans text-[10px] text-white/30 group-hover:text-[#ff6b1a]/70 tracking-[0.4em] uppercase font-light mb-2 transition-colors duration-300">
                    {categoryLabel(project.category)}
                  </p>
                  <h3 className="font-sans text-xl md:text-2xl font-black text-white tracking-tighter mb-3">{project.title}</h3>
                  <p className="font-sans text-sm text-white/35 group-hover:text-white/60 font-light leading-relaxed max-w-2xl transition-colors duration-300 line-clamp-3">
                    <ItalicText text={project.description} />
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[10px] text-white/20 group-hover:text-white/55 tracking-widest uppercase transition-colors duration-200">
                    Read More
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 8L8 2M8 2H4M8 2v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </span>
                </div>
                {project.image_url && (
                  <div className="hidden md:block shrink-0 w-28 h-20 overflow-hidden rounded-xl border border-white/5 opacity-0 group-hover:opacity-85 translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out relative">
                    <Image
                      src={project.image_url}
                      alt={project.title}
                      width={220}
                      height={160}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                )}
              </Link>
            ))
          )}

          <Link href="/projects" className="work-item group relative flex items-center gap-4 md:gap-8 py-10 md:py-14 border-b border-white/8 hover:border-white/20 transition-all duration-500">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[#ff6b1a] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />
            <div className="pl-3 shrink-0 w-8">
              <span className="font-mono text-[10px] text-white/20 group-hover:text-[#ff6b1a] tracking-widest transition-colors duration-300">→</span>
            </div>
            <div className="flex-1 translate-x-0 group-hover:translate-x-1.5 transition-transform duration-500 ease-out">
              <p className="font-sans text-[10px] text-white/30 group-hover:text-[#ff6b1a]/70 tracking-[0.4em] uppercase font-light mb-2 transition-colors duration-300">Full Portfolio</p>
              <h3 className="font-sans text-xl md:text-2xl font-black text-white tracking-tighter">View All Projects</h3>
            </div>
            <div className="hidden md:flex items-center gap-2 text-white/20 group-hover:text-[#ff6b1a] transition-colors duration-300 pr-2">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M6 14h16M16 8l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
