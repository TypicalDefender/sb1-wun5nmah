import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
}

export default function AnimatedHero({ title, subtitle }: HeroProps) {
  return (
    <motion.div 
      className="text-center space-y-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {title}
      </motion.h1>
      
      <motion.p 
        className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        {subtitle}
      </motion.p>
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.6 
        }}
        className="mt-8"
      >
        <div className="inline-block relative overflow-hidden group">
          <div className="absolute inset-0 w-3 bg-primary group-hover:w-full transition-all duration-500 ease-out opacity-80"></div>
          <a 
            href="#about" 
            className="relative px-6 py-3 border-2 border-primary text-primary font-medium rounded-md hover:text-white transition-colors duration-300 ease-out"
          >
            Learn More
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
