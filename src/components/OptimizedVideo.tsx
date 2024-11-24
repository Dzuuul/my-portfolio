import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OptimizedVideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  poster?: string;
  playsInline?: boolean;
}

export default function OptimizedVideo({
  src,
  className = '',
  autoPlay = false,
  loop = false,
  muted = false,
  controls = false,
  poster,
  playsInline = false,
}: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoading(false);
    };

    const handleError = () => {
      setIsError(true);
      setIsLoading(false);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, []);

  // Lazy loading with Intersection Observer
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={observerRef} className={`relative ${className}`}>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg"
          />
        )}
      </AnimatePresence>

      {isVisible && (
        <video
          ref={videoRef}
          className={`w-full h-full rounded-lg transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          controls={controls}
          playsInline={playsInline}
          poster={poster}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
          <p className="text-red-500">Failed to load video</p>
        </div>
      )}
    </div>
  );
}
