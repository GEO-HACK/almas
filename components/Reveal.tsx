"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay in ms before this block fades in. */
  delay?: number;
  /** When false, the wrapper itself does not fade; it only triggers child animations. */
  fade?: boolean;
};

// Marks itself data-shown="true" the first time it scrolls into view. The CSS in
// globals.css uses that flag to run the fade, draw, rise and grow animations.
export default function Reveal({ children, className = "", delay = 0, fade = true }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-shown={shown}
      className={`${fade ? "reveal" : ""} ${className}`}
      style={{ "--d": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
