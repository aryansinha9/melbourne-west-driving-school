import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ContactSection = () => (
  <section className="bg-red-600 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">BOOK NOW!</h2>
      <p className="mt-4 text-xl opacity-90 max-w-3xl mx-auto">
        Your journey to freedom on the road is just a booking away. Contact us to get started today.
      </p>
      <div className="mt-8">
        <a href="tel:0430474492" className="text-4xl md:text-5xl font-bold tracking-wider hover:underline block mb-4">
          PH: 0430474492
        </a>
        <p className="text-lg">Phone/Text or Email: <a href="mailto:melbournewestds@gmail.com" className="hover:underline">melbournewestds@gmail.com</a></p>
      </div>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="bg-white text-red-600 hover:bg-gray-200 rounded-full px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all">
          <Link href="/contact">Book Your Lesson</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default ContactSection;