import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Finn Knowles",
    text: "Waseem was incredibly helpful, made my confidence so much higher and was so helpful through his knowledge of the areas I was to be tested in. Would absolutely recommend to anyone going for their license!"
  },
  {
    name: "Ganesh Tavva",
    text: "Passed because of Waseem Bhai and his instructions. Though I was very nervous before taking classes, he made me feel comfortable and professionally taught everything. Would definitely recommend this place"
  },
  {
    name: "Angie Carcallas",
    text: "Waseem was incredibly helpful in building my confidence before my test. He is very skilled and will set you up for success. Passed the test first try all because of him!"
  },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black">What Our Students Say</h2>
        <div className="w-20 h-1 bg-red-600 mt-2 mx-auto"></div>
      </div>
      <div className="mt-12 grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-2xl p-8 relative shadow-sm">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
            </div>
            <p className="text-gray-700 italic">{testimonial.text}</p>
            <p className="mt-4 font-bold text-black text-right">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;