"use client";
import React, { useState } from 'react';
import Image from 'next/image'; // <-- Use Next.js Image component
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const successPhotos = [
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d13cf9dba1da4cde959c5c/44fab2d32_Screenshot2025-09-22at114008pm.png", alt: "Young male student celebrating with P plates" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d13cf9dba1da4cde959c5c/7f38560bf_Screenshot2025-09-22at114016pm.png", alt: "Female student celebrating with license" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d13cf9dba1da4cde959c5c/927aafb68_Screenshot2025-09-22at114023pm.png", alt: "Male student showing peace sign after passing test" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d13cf9dba1da4cde959c5c/9570ded27_Screenshot2025-09-22at114030pm.png", alt: "Female student with green license certificate" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d13cf9dba1da4cde959c5c/8007d1322_Screenshot2025-09-22at114036pm.png", alt: "Female student with P plates outdoors" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d13cf9dba1da4cde959c5c/435ad8ccb_Screenshot2025-09-22at114042pm.png", alt: "Male student standing next to driving school car" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d13cf9dba1da4cde959c5c/9cf66d793_Screenshot2025-09-22at114050pm.png", alt: "Male student giving thumbs up after passing" },
    { src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d13cf9dba1da4cde959c5c/30b1cc5cf_photo.jpg", alt: "Male student in Adidas shirt showing thumbs up with license" }
];

const SuccessStoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % successPhotos.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? successPhotos.length - 1 : prevIndex - 1));
  };

  const getVisiblePhotos = () => {
    const photos = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + successPhotos.length) % successPhotos.length;
      photos.push({ ...successPhotos[index], position: i });
    }
    return photos;
  };

  const visiblePhotos = getVisiblePhotos();

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0, scale: 0.8 }),
    center: (position) => ({
      x: position === -1 ? -420 : position === 1 ? 420 : 0,
      opacity: position === 0 ? 1 : 0.6,
      scale: position === 0 ? 1 : 0.75,
      zIndex: position === 0 ? 10 : 1,
      transition: { x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.5 }, scale: { duration: 0.5 }, zIndex: { delay: position === 0 ? 0 : 0.2 } }
    }),
    exit: (direction) => ({ x: direction > 0 ? -1000 : 1000, opacity: 0, scale: 0.8, transition: { x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.3 }, scale: { duration: 0.3 } } })
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Success Stories</h2>
          <div className="w-20 h-1 bg-red-600 mt-2 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrating our students' achievements! These are just some of the many happy faces who have successfully passed their driving test with Melbourne West Driving School.
          </p>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all">
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div className="relative h-[500px] overflow-hidden flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              {visiblePhotos.map((photo) => (
                <motion.div key={`${currentIndex}-${photo.position}`} custom={photo.position} variants={slideVariants} initial="enter" animate="center" exit="exit" className="absolute" style={{ width: photo.position === 0 ? '400px' : '300px' }}>
                  <div className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ${photo.position === 0 ? 'shadow-2xl' : 'shadow-md'}`}>
                    <Image src={photo.src} alt={photo.alt} width={400} height={450} className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-300" />
                    {photo.position === 0 && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center justify-center">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                              <span className="text-white font-semibold text-base">✓ Success!</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all">
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {successPhotos.map((_, idx) => (
            <button key={idx} onClick={() => { setDirection(idx > currentIndex ? 1 : -1); setCurrentIndex(idx); }} className={`w-2 h-2 rounded-full transition-all ${currentIndex === idx ? 'bg-red-600 w-8' : 'bg-gray-300'}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;