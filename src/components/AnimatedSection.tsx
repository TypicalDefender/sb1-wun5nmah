import React from 'react';
import { motion } from 'framer-motion';

type ReactNode = React.ReactNode;

interface Props {
  children: ReactNode;
  delay?: number;
}

export default function AnimatedSection({ children, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}