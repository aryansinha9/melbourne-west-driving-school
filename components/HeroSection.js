import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

// Hero Section Component
const HeroSection = () => (
  <section className="bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Learn to Drive with Confidence
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            Professional driving lessons in <span className="font-semibold">English, Hindi, Telugu & Urdu</span>. Your journey to getting a license starts here.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 rounded-full px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all">
              <a href="tel:0430474492">Book Your First Lesson</a>
            </Button>
            <Button size="lg" variant="ghost" className="text-gray-800 hover:bg-gray-100 rounded-full px-8 py-6 text-base font-semibold">
              <a href="tel:0430474492" className="flex items-center">
                <Phone className="w-5 h-5 mr-2"/> Call Now: 0430 474 492
              </a>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center p-4">
          <Image
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d13cf9dba1da4cde959c5c/c1aca34fb_GeneratedImageSeptember222025-10_45PM-Photoroom.png"
            alt="Melbourne West Driving School car outline"
            width={800}
            height={600}
            className="w-full max-w-xl rounded-2xl"
          />
        </div>
      </div>
    </div>
    <div className="h-2 bg-red-600 w-full"></div>
  </section>
);

export default HeroSection;