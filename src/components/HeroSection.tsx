import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);
const TOTAL_FRAMES = 200;
const frameSrcs = Array.from(
  { length: TOTAL_FRAMES },
  (_, i) => `/hero-frames/${String(i + 1).padStart(3, "0")}.webp`,
);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRefs = useRef<(HTMLImageElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeFrame = useRef(0);

  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const btn1Ref = useRef<HTMLDivElement>(null);
  const btn2Ref = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    frameSrcs.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
    window.scrollTo(0, 0);


    const ctx = gsap.context(() => {
      frameRefs.current.forEach((el, i) => {
        if (el) gsap.set(el, { opacity: i === 0 ? 1 : 0 });
      });


      gsap.matchMedia().add("(max-width: 768px)", () => {
        const enterTl = gsap.timeline({
          defaults: { ease: "power4.out" },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${window.innerHeight * 4}`,
            scrub: 0.8,
          },
        });

        enterTl
          .to(btn1Ref.current, {
            opacity: 0,
            y: -20,
            scale: 0.95,
            duration: 0.3,
          }, "-0.4",)
          .to(
            btn2Ref.current,
            { opacity: 0, y: -20, scale: 0.95, duration: 0.3 },
            "-=0.25",
          )
          .to(
            subtextRef.current,
            { opacity: 0, y: -24, duration: 0.4 },
            "-=0.2",
          )
          .to(badgeRef.current, { opacity: 0, y: -16, duration: 0.4 }, "-=0.2")
          .to(
            line1Ref.current,
            { opacity: 0, y: -80, skewY: -5, duration: 0.5 },
            "-=0.3",
          )
          .to(
            line2Ref.current,
            { opacity: 0, y: -80, skewY: -5, duration: 0.5 },
            "-=0.4",
          )
          .to(
            line3Ref.current,
            { opacity: 0, y: -80, skewY: -5, duration: 0.5 },
            "-=0.4",
          )
          .to(
            scrollHintRef.current,
            { opacity: 0, y: -8, duration: 0.3 },
            "-=0.1",
          );
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${window.innerHeight * 2.5}`,
        pin: true,
        pinSpacing: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const idx = Math.min(
            Math.floor(self.progress * TOTAL_FRAMES),
            TOTAL_FRAMES - 1,
          );
          if (idx !== activeFrame.current) {
            const prev = frameRefs.current[activeFrame.current];
            const next = frameRefs.current[idx];
            if (prev) gsap.set(prev, { opacity: 0 });
            if (next) gsap.set(next, { opacity: 1 });

            const prevDot = dotRefs.current[activeFrame.current];
            const nextDot = dotRefs.current[idx];
            if (prevDot)
              gsap.to(prevDot, {
                height: 8,
                backgroundColor: "rgba(255,255,255,0.2)",
                duration: 0.2,
              });
            if (nextDot)
              gsap.to(nextDot, {
                height: 24,
                backgroundColor: "rgba(255,255,255,0.7)",
                duration: 0.2,
              });

            activeFrame.current = idx;
          }
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
       ScrollTrigger.killAll();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative top-0 h-screen w-full bg-black text-white overflow-hidden">
      {frameSrcs.map((src, i) => (
        <img
          key={i}
          ref={(el) => {
            frameRefs.current[i] = el;
          }}
          src={src}
          alt={`Hero frame ${i + 1}`}
          className="absolute inset-0 w-screen h-screen md:object-cover object-cover object-[83%] md:scale-100 scale-150 pointer-events-none select-none"
          style={{ opacity: i === 0 ? 1 : 0 }}
          draggable={false}
        />
      ))}

      <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />

      <div className="relative z-20 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-20 xl:px-28 max-w-4xl">
        <div
          ref={badgeRef}
          className="inline-flex items-center mb-8 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-xs sm:text-sm font-medium tracking-widest uppercase text-gray-300 w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-white mr-2 animate-pulse" />
          Business Development Driven
        </div>

        <h1
          ref={headlineRef}
          className="font-display font-bold leading-[1.05] tracking-tight mb-8 overflow-hidden"
          style={{ fontSize: "clamp(3rem, 6vw, 4rem)" }}>
          <span ref={line1Ref} className="block will-change-transform">
            We Build
          </span>
          <span ref={line2Ref} className="block will-change-transform">
            Systems That
          </span>
          <span
            ref={line3Ref}
            className="block text-transparent bg-clip-text bg-linear-to-r from-gray-100 to-gray-500 will-change-transform">
            Grow Businesses.
          </span>
        </h1>

        <p
          ref={subtextRef}
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 max-w-xl font-light leading-relaxed">
          From technology to media, from strategy to execution —{" "}
          <span className="text-white font-medium">
            we design integrated growth solutions for brands.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <div ref={btn1Ref}>
            <Link href="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="rounded-full font-bold px-8 hover:scale-105 transition-transform duration-200">
                Book a Strategy Session
              </Button>
            </Link>
          </div>
          <div ref={btn2Ref}>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full font-bold px-8 hover:scale-105 transition-transform duration-200">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>

        {/* <div
          ref={scrollHintRef}
          className="absolute bottom-10 left-8 sm:left-12 lg:left-20 xl:left-28 flex items-center gap-3 text-gray-600">
          <div className="flex flex-col gap-1">
            <span className="w-px h-6 bg-gray-700 mx-auto" />
            <span className="w-px h-6 bg-gray-600 mx-auto animate-bounce" />
          </div>
          <span className="text-xs tracking-widest uppercase font-medium">
            Scroll to explore
          </span>
        </div> */}
      </div>

      {/* <div className="absolute top-1/2 right-8 -translate-y-1/2 z-20 flex flex-col gap-1.5">
        {frameSrcs.map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              dotRefs.current[i] = el;
            }}
            className="w-0.5 rounded-full"
            style={{
              height: i === 0 ? "24px" : "8px",
              backgroundColor:
                i === 0 ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.2)",
            }}
          />
        ))}
      </div> */}
    </section>
  );
}
