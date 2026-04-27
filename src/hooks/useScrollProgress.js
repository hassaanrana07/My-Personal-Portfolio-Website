import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll progress (0 to 1)
 * within a specific range or across the whole window.
 */
export const useScrollProgress = (ref) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const { top, height } = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the container has been scrolled past the viewport
      // 0 = top of container is at top of viewport
      // 1 = bottom of container is at bottom of viewport
      const totalScrollable = height - windowHeight;
      const currentScroll = -top;
      
      const p = Math.max(0, Math.min(1, currentScroll / totalScrollable));
      setProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return progress;
};
