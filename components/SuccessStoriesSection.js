"use client";
import React from 'react';
import CircularGallery from './CircularGallery';

const successPhotos = [
  { image: "/images/success-1.jpeg", text: "" },
  { image: "/images/success-2.jpeg", text: "" },
  { image: "/images/success-3.jpeg", text: "" },
  { image: "/images/success-4.jpeg", text: "" },
  { image: "/images/success-5.jpeg", text: "" },
  { image: "/images/success-6.jpeg", text: "" },
  { image: "/images/success-7.jpeg", text: "" },
  { image: "/images/success-8.jpeg", text: "" },
  { image: "/images/success-9.jpeg", text: "" },
  { image: "/images/success-10.jpeg", text: "" },
  { image: "/images/success-11.jpeg", text: "" },
  { image: "/images/success-12.jpeg", text: "" }
];

const SuccessStoriesSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Success Stories</h2>
          <div className="w-20 h-1 bg-red-600 mt-2 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Celebrating our students' achievements! These are just some of the many happy faces who have successfully passed their driving test with Melbourne West Driving School.
          </p>
        </div>

        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery
            items={successPhotos}
            bend={1}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.03}
            scrollSpeed={1.5}
          />
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;