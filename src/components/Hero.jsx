"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import BlurText from "./BlurText";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-label", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.2 });
      gsap.from(".hero-line",  { y: 90, opacity: 0, stagger: 0.1, duration: 1.1, ease: "power4.out", delay: 0.4 });

      gsap.from(".hero-letter", {
        y: 100,
        opacity: 0,
        rotateX: -40,
        stagger: 0.06,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.5,
      });

      gsap.from(".hero-sub", { y: 30, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.8 });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen md:min-h-[135vh] flex flex-col justify-center pt-28 pb-12 md:pt-36 md:pb-0 px-6 md:px-20 overflow-hidden"
    >
      <div className="relative z-10 w-full">
        <p className="hero-label text-[10px] sm:text-xs text-[#ff6b1a] tracking-[0.16em] uppercase font-bold mb-4 md:mb-6 max-w-[85vw] md:max-w-none">
          Software Engineer
        </p>

        <h1
          className="font-black tracking-tighter leading-[0.75] mb-8 md:mb-12 flex flex-col relative z-10 hero-clamp-text"
        >
          <span className="hero-line block ghost z-0">Hey, I'm</span>
          <span className="block text-white mt-2 md:-mt-6 z-10 hero-perspective">
            {"Nishika".split("").map((char, index) => (
              <span key={index} className="hero-letter inline-block">
                {char === " " ? " " : char}
              </span>
            ))}
          </span>
        </h1>

        <div className="max-w-2xl hero-sub flex flex-col gap-6">
          <BlurText
            text="I build software that combines *thoughtful engineering* with *practical AI*. Most of my work lives at the intersection of backend systems, full-stack applications, and machine learning."
            delay={25}
            animateBy="words"
            direction="bottom"
            stepDuration={0.22}
            animateOnMount
            className="text-base md:text-[17px] text-white/60 font-medium leading-[1.6]"
          />
          <BlurText
            text="Software engineer focused on *backend systems*, *full-stack applications*, and *practical AI*. Currently building products that combine machine learning with thoughtful software engineering."
            delay={20}
            animateBy="words"
            direction="bottom"
            stepDuration={0.2}
            animateOnMount
            className="text-xs md:text-sm text-white/40 font-light leading-relaxed"
          />
          <BlurText
            text="The interesting work is usually *underneath*."
            delay={15}
            animateBy="words"
            direction="bottom"
            stepDuration={0.18}
            animateOnMount
            className="text-xs md:text-sm text-white/30 font-light leading-relaxed"
          />

          <p className="mt-8 text-[10px] text-white/40 tracking-[0.4em] uppercase font-medium">
            Explore ↓
          </p>
        </div>
      </div>

    </section>
  );
}
