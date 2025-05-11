import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description?: string;
  link: string;
  delay?: number;
}

export default function AnimatedCard({ title, description, link, delay = 0 }: CardProps) {
  return (
    <motion.div
      className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800 relative overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      {/* Background gradient that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <h2 className="text-2xl font-semibold mb-3 relative z-10">
        {title}
      </h2>
      
      {description && (
        <p className="text-gray-600 dark:text-gray-300 mb-4 relative z-10">
          {description}
        </p>
      )}
      
      <motion.a
        href={link}
        className="text-primary hover:text-blue-700 dark:hover:text-blue-400 font-medium inline-flex items-center relative z-10"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        View Project
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 ml-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13 7l5 5m0 0l-5 5m5-5H6" 
          />
        </svg>
      </motion.a>
    </motion.div>
  );
}
