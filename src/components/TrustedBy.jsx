"use client";
import { useEffect, useState } from "react";
import ItalicText from "./ItalicText";

const DEFAULT_BRANDS = [
  "DANLIYA",
  "COCOTHAI",
  "HOUSE OF DRAPES",
  "KALMEYI",
  "PRAKRUTHI",
  "IXORAONE",
  "LASHADESIGNZ",
];

export default function TrustedBy() {
  const [brands, setBrands] = useState(DEFAULT_BRANDS);

  useEffect(() => {
    fetch("/api/settings?key=trusted_brands")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (Array.isArray(data?.value) && data.value.length > 0) setBrands(data.value);
      })
      .catch(() => {});
  }, []);

  const loop = [...brands, ...brands];

  return (
    <section
      id="brands-section"
      className="relative w-full py-16 md:py-24 border-y border-white/5 bg-black/20 overflow-hidden z-20"
    >
      <div className="w-full px-6 md:px-20 mb-8 md:mb-10 text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="font-sans text-[10px] text-[#ff6b1a] tracking-[0.5em] uppercase font-bold mb-2">
            Trusted By
          </p>
          <h2 className="text-white/40 text-xs md:text-sm font-light max-w-xl leading-relaxed">
            <ItalicText text="Partnering with *e-commerce startups*, *design studios*, and *fashion brands* globally, including *Danliya*, *Cocothai*, *House of Drapes*, and more." />
          </h2>
        </div>
      </div>

      <div
        className="relative w-full flex items-center overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, transparent)",
        }}
      >
        <div className="flex whitespace-nowrap gap-16 md:gap-24 animate-marquee py-2">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className={
                i % 2 === 0
                  ? "marquee-sans text-2xl md:text-4xl tracking-widest select-none cursor-default uppercase"
                  : "marquee-ghost text-2xl md:text-4xl tracking-widest select-none cursor-default uppercase"
              }
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
