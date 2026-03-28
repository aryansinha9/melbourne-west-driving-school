import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const SocialSection = () => (
  <section className="py-12 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black">Follow Us Online</h2>
        <div className="w-20 h-1 bg-red-600 mt-2 mx-auto" />
      </div>

      <div className="flex flex-col gap-8 max-w-3xl mx-auto">
        {/* Facebook */}
        <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
          <Facebook className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">We are on Facebook!</h3>
          <p className="text-lg mb-6">Follow us for updates, tips, and success stories from our students.</p>
          <a
            href="https://www.facebook.com/meldrivingschool"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 rounded-full px-6 py-3 font-semibold transition-colors"
          >
            <span className="break-words">Visit Melbourne West Driving School Facebook Page</span>
          </a>
        </div>

        {/* Instagram */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white rounded-2xl p-8 text-center">
          <Instagram className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">We are on Instagram!</h3>
          <p className="text-lg mb-6">Follow us for daily driving tips, student success stories, and behind-the-scenes moments.</p>
          <a
            href="https://www.instagram.com/melbournewestdrivingschool/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto bg-white text-purple-600 hover:bg-gray-100 rounded-full px-6 py-3 font-semibold transition-colors"
          >
            <span className="break-words">Visit Melbourne West Driving School Instagram Page</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default SocialSection;
