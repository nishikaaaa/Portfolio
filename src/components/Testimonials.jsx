"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ItalicText from "./ItalicText";

gsap.registerPlugin(ScrollTrigger);

const FALLBACK = [];

export default function Testimonials() {
  const ref = useRef(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => {
        const approved = (data || []).filter((r) => r.approved);
        setReviews(approved.length > 0 ? approved : FALLBACK);
      })
      .catch(() => setReviews(FALLBACK))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (loading || reviews.length === 0 || !ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        scrollTrigger: { trigger: ref.current, start: "top 80%", toggleActions: "play none none none" },
        y: 35, opacity: 0, stagger: 0.12, duration: 0.7, ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, [loading, reviews]);

  return (
    <section ref={ref} id="testimonials-section" className="relative w-full px-6 md:px-20 py-24 md:py-32 z-20 overflow-hidden">
      <div className="w-full">
        <div className="mb-16 md:mb-20">
          <p className="font-sans text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase mb-4 font-medium">What Clients Say</p>
          <h2 className="font-sans font-black tracking-tighter text-white leading-none" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
            Testimonials.
          </h2>
        </div>

        {loading ? (
          <div className="text-white/20 text-xs tracking-widest uppercase py-10 font-mono">Loading reviews...</div>
        ) : reviews.length === 0 ? (
          <p className="text-sm text-white/35 font-light">Nothing here yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
            {reviews.map((review) => (
              <div key={review._id || review.id} className="testimonial-card group relative p-8 bg-white/[0.02] border border-white/5 hover:border-white/15 rounded-2xl transition-all duration-300">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={`text-sm ${i < review.rating ? "text-[#ff6b1a]" : "text-white/10"} select-none`}>★</span>
                  ))}
                </div>
                <p className="font-sans text-sm text-white/50 group-hover:text-white/70 leading-relaxed mb-8 transition-colors duration-300">
                  “<ItalicText text={review.content} />”
                </p>
                <div className="flex items-center gap-3">
                  {review.avatar ? (
                    <img src={review.avatar} alt={review.author} className="size-9 rounded-full object-cover opacity-80" loading="lazy" />
                  ) : (
                    <div className="size-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-mono text-[10px] text-white/40 uppercase">
                      {review.author?.substring(0, 2) || "CL"}
                    </div>
                  )}
                  <div>
                    <h4 className="font-sans text-sm font-bold text-white tracking-tight">{review.author}</h4>
                    {(review.role || review.company) && (
                      <p className="font-sans text-[10px] text-white/30 uppercase tracking-widest mt-0.5">
                        {[review.role, review.company].filter(Boolean).join(" · ")}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
