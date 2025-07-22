"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 34000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });

  return (
    <div className="relative flex flex-col items-center gap-4 sm:gap-6 w-full max-w-[600px] mx-auto">
      <div className="relative w-full max-w-[600px] mx-auto flex items-center justify-center">
        <button
          className="absolute -left-10 md:-left-14 top-1/2 -translate-y-1/2
            text-white rounded-full p-2 md:p-3 shadow-md z-20"
          onClick={prevSlide}
        >
          <svg
            className="w-6 h-6 transform -scale-x-100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 5l7 7-7 7M4 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div
          {...handlers}
          className="aspect-square w-full max-w-[600px] rounded-2xl overflow-hidden flex items-center justify-center shadow-lg relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full h-full relative"
              exit={{ opacity: 0, scale: 0.95 }}
              initial={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                fill
                alt={`Slide ${currentIndex + 1}`}
                className="object-cover"
                src={images[currentIndex]}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          className="absolute -right-10 md:-right-14 top-1/2 -translate-y-1/2
           text-white rounded-full p-2 md:p-3 shadow-md z-20"
          onClick={nextSlide}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 5l7 7-7 7M4 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Miniaturas */}
      <div className="flex gap-3 flex-wrap justify-center mt-2">
        {images.map((img, i) => (
          <button
            key={i}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 sm:border-3 transition ${
              i === currentIndex ? "border-white" : "border-transparent"
            }`}
            style={{ backgroundColor: "#FFAC04" }}
            onClick={() => setCurrentIndex(i)}
          >
            <Image
              unoptimized
              alt={`Preview ${i + 1}`}
              className="object-cover"
              height={48}
              src={img}
              width={48}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
