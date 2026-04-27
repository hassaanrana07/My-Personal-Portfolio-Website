import React, { useRef, useEffect, useState, useMemo } from 'react';

/**
 * ScrollyCanvas: The core mechanic for scroll-linked animation.
 * Renders an image sequence using HTML5 Canvas.
 */
const ScrollyCanvas = ({ progress }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [ready, setReady] = useState(false);
  
  const frameCount = 75; // 0 to 74
  
  // File naming pattern: frame_00_delay-0.066s.png
  const getFrameUrl = (index) => {
    const formattedIndex = index.toString().padStart(2, '0');
    return `/sequence/frame_${formattedIndex}_delay-0.066s.png`;
  };

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const preloadedImages = [];

    const loadImage = (index) => {
      const img = new Image();
      img.src = getFrameUrl(index);
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
        if (loadedCount === frameCount) {
          setReady(true);
        }
      };
      preloadedImages[index] = img;
    };

    for (let i = 0; i < frameCount; i++) {
      loadImage(i);
    }
    
    imagesRef.current = preloadedImages;
  }, []);

  // Handle drawing to canvas
  const drawFrame = (index) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const img = imagesRef.current[index];

    if (!canvas || !ctx || !img || !ready) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Object-fit: cover logic
    const imgRatio = img.width / img.height;
    const canvasRatio = canvas.width / canvas.height;
    
    let drawWidth, drawHeight, offsetX, offsetY;

    if (imgRatio > canvasRatio) {
      drawHeight = canvas.height;
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    } else {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Adjust canvas resolution on resize
  useEffect(() => {
    const updateSize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth * window.devicePixelRatio;
      canvasRef.current.height = window.innerHeight * window.devicePixelRatio;
      
      // Scale back to screen size
      canvasRef.current.style.width = `${window.innerWidth}px`;
      canvasRef.current.style.height = `${window.innerHeight}px`;
      
      // Draw the current frame after resize
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(progress * (frameCount - 1))
      );
      if (imagesRef.current[frameIndex]) {
        drawFrame(frameIndex);
      }
    };

    window.addEventListener('resize', updateSize);
    updateSize();
    
    return () => window.removeEventListener('resize', updateSize);
  }, [progress, ready]);

  // Redraw when progress or ready state changes
  useEffect(() => {
    if (!ready) return;
    const frameIndex = Math.min(
      frameCount - 1,
      Math.floor(progress * (frameCount - 1))
    );
    drawFrame(frameIndex);
  }, [progress, ready]);

  return (
    <div ref={containerRef} className="relative w-full h-full bg-[#121212]">
      {/* Loading overlay if needed (could be nice) */}
      {!ready && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#121212]">
          <div className="w-1/4 h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-300" 
              style={{ width: `${(imagesLoaded / frameCount) * 100}%` }}
            />
          </div>
          <p className="mt-4 text-xs tracking-widest uppercase font-light text-white/50">
            Initializing Cinematic Experience {Math.round((imagesLoaded / frameCount) * 100)}%
          </p>
        </div>
      )}
      
      <canvas 
        ref={canvasRef} 
        className="block w-full h-full object-cover transition-opacity duration-1000"
        style={{ opacity: ready ? 1 : 0 }}
      />
    </div>
  );
};

export default ScrollyCanvas;
