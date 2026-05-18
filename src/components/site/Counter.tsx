import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CounterProps {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const Counter = ({ to, suffix = "", duration = 2, className }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(to);
  }, [inView, motionValue, to]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      setDisplay(Math.floor(v));
    });
    return () => unsub();
  }, [spring]);

  const formatted =
    to >= 1000 ? `${(display / 1000).toFixed(display >= 1000 ? 0 : 1)}K` : display.toString();

  return (
    <span ref={ref} className={className}>
      {formatted}
      {suffix}
    </span>
  );
};
