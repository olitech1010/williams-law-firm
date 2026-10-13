"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface SlideData {
  id: number;
  image: string;
  alt: string;
  badge: string;
  title: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    image: "/hero-team-office.jpg",
    alt: "Attorney Randall DeWitt Williams with his legal team in their law office",
    badge: "Edgefield & CSRA Experienced Counsel",
    title: "Dedicated Legal Guidance Backed by Over 30 Years of Trial Experience",
    description:
      "Attorney Randall DeWitt Williams, Esq. and his dedicated legal team deliver aggressive, personalized representation in Workers' Compensation, Personal Injury, and Civil Litigation.",
    primaryCtaText: "Call +1 (864) 569-8329",
    primaryCtaHref: "tel:+18645698329",
    secondaryCtaText: "Request Consultation",
    secondaryCtaHref: "#contact",
  },
  {
    id: 2,
    image: "/hero-conference-strategy.jpg",
    alt: "Attorney Williams leading a legal strategy session with team members",
    badge: "Strategic Trial Advocacy",
    title: "A Collaborative Legal Team Fighting Relentlessly for Your Rights",
    description:
      "Every case receives meticulous preparation and strategic courtroom insight. We stand with you at every stage, from initial consultation through verdict or settlement.",
    primaryCtaText: "Call +1 (864) 569-8329",
    primaryCtaHref: "tel:+18645698329",
    secondaryCtaText: "Our Practice Areas",
    secondaryCtaHref: "#practice-areas",
  },
  {
    id: 3,
    image: "/hero-consultation-library.jpg",
    alt: "Attorney Williams conducting a client consultation in the law library",
    badge: "Personalized Client Counsel",
    title: "Compassionate Guidance When You Need It Most",
    description:
      "Facing an unexpected dispute or serious injury can be overwhelming. Attorney Williams works directly with you to resolve your case with clear, honest counsel and trial-tested strategy.",
    primaryCtaText: "Call +1 (864) 569-8329",
    primaryCtaHref: "tel:+18645698329",
    secondaryCtaText: "Schedule Consultation",
    secondaryCtaHref: "#contact",
  },
  {
    id: 4,
    image: "/hero-courthouse-steps.jpg",
    alt: "Attorney Williams and legal team outside the historic courthouse",
    badge: "Dual-Licensed in SC & NC",
    title: "Deep Community Roots & Authoritative Courtroom Presence",
    description:
      "A pillar of the Edgefield community for decades, licensed to practice in both South Carolina and North Carolina state and municipal courts.",
    primaryCtaText: "Call +1 (864) 569-8329",
    primaryCtaHref: "tel:+18645698329",
    secondaryCtaText: "About Attorney Williams",
    secondaryCtaHref: "#about",
  },
];

const AUTOPLAY_INTERVAL = 5000; // 5 seconds per slide

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    if (isPlaying && !isHovered) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, AUTOPLAY_INTERVAL);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isHovered, nextSlide, current]);

  return (
    <section
      className="relative w-full h-[620px] sm:h-[660px] lg:h-[700px] overflow-hidden bg-slate-950"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-roledescription="carousel"
      aria-label="The Williams Law Firm Highlights"
    >
      {/* Background Slides */}
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
            aria-hidden={!isActive}
          >
            {/* Background Image with subtle zoom on active */}
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                className={`object-cover object-center transition-transform duration-[7000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
                sizes="100vw"
              />
              {/* High-contrast gradient overlay to ensure text contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-900/60" />
            </div>

            {/* Slide Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl pt-10 sm:pt-6">
                  {/* Category / Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-700/30 border border-amber-600/40 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                    {slide.badge}
                  </div>

                  {/* Headline */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-md">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 max-w-2xl font-light leading-relaxed drop-shadow">
                    {slide.description}
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                    <a
                      href={slide.primaryCtaHref}
                      className="inline-flex justify-center items-center bg-amber-700 hover:bg-amber-800 text-white px-7 py-3.5 rounded-md font-bold text-base sm:text-lg transition-colors shadow-lg active:scale-95"
                    >
                      <svg
                        className="w-5 h-5 mr-2.5 text-white flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      {slide.primaryCtaText}
                    </a>
                    <Link
                      href={slide.secondaryCtaHref}
                      className="inline-flex justify-center items-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-7 py-3.5 rounded-md font-bold text-base sm:text-lg transition-colors shadow-lg"
                    >
                      {slide.secondaryCtaText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white border border-white/20 flex items-center justify-center transition-all hover:scale-105 active:scale-95 backdrop-blur-sm focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white border border-white/20 flex items-center justify-center transition-all hover:scale-105 active:scale-95 backdrop-blur-sm focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Bottom Bar: Indicators & Autoplay controls */}
      <div className="absolute bottom-6 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Indicators with 5-second progress indicator */}
          <div className="flex items-center space-x-3">
            {slides.map((slide, index) => {
              const isActive = index === current;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}: ${slide.badge}`}
                  className="relative group py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-full"
                >
                  <div
                    className={`h-2 rounded-full transition-all duration-300 overflow-hidden ${
                      isActive ? "w-12 bg-slate-700" : "w-3 bg-white/40 hover:bg-white/70"
                    }`}
                  >
                    {isActive && (
                      <div
                        key={`progress-${current}-${isPlaying && !isHovered}`}
                        className={`h-full bg-amber-500 rounded-full ${
                          isPlaying && !isHovered ? "w-full animate-[progress_5s_linear]" : "w-full"
                        }`}
                        style={{
                          animationDuration: "5000ms",
                        }}
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Autoplay toggle and slide counter */}
          <div className="flex items-center space-x-4 bg-slate-900/60 backdrop-blur-sm border border-white/10 px-3.5 py-1.5 rounded-full text-xs text-slate-300">
            <span className="font-mono">
              0{current + 1} / 0{slides.length}
            </span>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause automatic slideshow" : "Play automatic slideshow"}
              className="text-slate-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-full"
            >
              {isPlaying ? (
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
