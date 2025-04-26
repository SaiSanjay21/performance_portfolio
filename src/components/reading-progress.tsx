"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      // Calculate how far the user has scrolled through the content
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      setProgress(scrollPercent * 100);
    };

    // Add scroll event listener
    window.addEventListener("scroll", updateProgress);
    
    // Initial calculation
    updateProgress();

    // Cleanup
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-1 bg-primary/30 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div 
        className="h-full bg-primary"
        style={{ width: `${progress}%` }}
        initial={{ width: "0%" }}
        animate={{ width: `${progress}%` }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />
    </motion.div>
  );
}