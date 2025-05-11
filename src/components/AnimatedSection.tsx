import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

type ReactNode = React.ReactNode;

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
  animateOnLoad?: boolean;
}

export default function AnimatedSection({
  children,
  delay = 0,
  className = "",
  threshold = 0.2,
  triggerOnce = true,
  animateOnLoad = false
}: Props) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: triggerOnce,
    amount: threshold
  });

  useEffect(() => {
    // If animateOnLoad is true, animate immediately
    if (animateOnLoad) {
      controls.start("visible");
      return;
    }

    // Otherwise, animate when in view
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView, animateOnLoad]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { y: 30, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
            delay,
            ease: [0.25, 0.1, 0.25, 1.0]
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}