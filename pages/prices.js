import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Car, Award } from 'lucide-react';

export default function PricesPage() {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-gray-50 pt-16 pb-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black">Prices</h1>
          <div className="w-20 h-1 bg-red-600 mt-3 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Transparent and affordable pricing for top-quality driving instruction. Choose the package that's right for you.
          </p>
        </div>
      </section>

      {/* Pricing Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 60 Minute Lessons */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-8">60 Minute Lessons</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Car className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Single Lesson</h3>
                  <div className="text-4xl font-bold text-black mb-6">$66</div>
                  <p className="text-gray-600">60 minute lesson</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200 rounded-2xl shadow-lg hover:shadow-xl transition-all bg-red-50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Car className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Package Deal</h3>
                  <div className="text-4xl font-bold text-red-600 mb-6">$325</div>
                  <p className="text-gray-600">5 x 60 minute lessons</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Test Rates */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-8">Test Rates</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Driving Test</h3>
                  <div className="text-4xl font-bold text-black mb-6">$169</div>
                  <p className="text-gray-600">Driving test</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-200 rounded-2xl shadow-lg hover:shadow-xl transition-all bg-red-50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Lesson + Test</h3>
                  <div className="text-4xl font-bold text-red-600 mb-6">$210</div>
                  <p className="text-gray-600">60 mins lesson + driving test</p>
                </CardContent>
              </Card>
            </div>
            <p className="text-center text-gray-600 mt-6 font-medium">
              (All tests include car hire rates)
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">BOOK NOW!</h2>
            <div className="mb-8">
              <a href="tel:0430474492" className="text-4xl md:text-5xl font-bold text-red-600 hover:underline block">
                PH: 0430474492
              </a>
            </div>
            <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 rounded-full px-8 py-6 text-lg font-semibold shadow-lg">
              <a href="tel:0430474492" className="flex items-center">
                <Phone className="w-5 h-5 mr-2"/> Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-black mb-8">Terms and Conditions:</h3>
          <ul className="space-y-4 text-gray-700 text-sm">
            <li className="flex items-start">
              <span className="font-bold text-red-600 mr-3 text-lg">•</span>
              <span>Prices may change depending on the clients location from us as to compensate for travel time and fuel</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-red-600 mr-3 text-lg">•</span>
              <span>All packages are to be pre-paid and all packages expire 3 months from the date of purchase</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-red-600 mr-3 text-lg">•</span>
              <span>We accept Cash and direct bank transfers</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-red-600 mr-3 text-lg">•</span>
              <span>24 Hour cancellation required or full fee applies</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-red-600 mr-3 text-lg">•</span>
              <span>We cover Drive test in Werribee & Deerpark</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-red-600 mr-3 text-lg">•</span>
              <span>Note other test locations price may be subject to distance and time (for more information Contact Waseem @ <a href="tel:0430474492" className="text-red-600 hover:underline">PH:0430474492</a> Phone/Text or you can Email me at <a href="mailto:melbournewestds@gmail.com" className="text-red-600 hover:underline">melbournewestds@gmail.com</a>)</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}