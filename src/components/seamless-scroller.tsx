"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type SeamlessScrollerProps = {
  children: React.ReactNode;
};

export function SeamlessScroller({ children }: SeamlessScrollerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  // Remove global blur/scale to ensure maximum clarity

  useEffect(() => {
    // Ensure smooth scrolling on supported browsers
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-[calc(100vh-4rem)] overflow-y-scroll",
        "snap-y snap-mandatory"
      )}
    >
      <div>
        {children}
      </div>

      {/* Progress dots */}
      <motion.div
        aria-hidden
        className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-3 z-30"
        style={{ opacity: useTransform(scrollYProgress, [0, 1], [0.6, 1]) }}
      >
        {[
          { href: "#home", label: "Home" },
          { href: "#about", label: "About" },
          { href: "#blog", label: "Blog" },
          { href: "#projects", label: "Projects" },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="w-3 h-3 rounded-full bg-primary/40 hover:bg-primary transition-colors border border-primary/30"
            title={item.label}
          />
        ))}
      </motion.div>
    </div>
  );
}

type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "snap-start min-h-[calc(100vh-4rem)] flex items-center",
        "relative",
        className
      )}
    >
      {children}
    </section>
  );
}