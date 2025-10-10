import React from 'react';
import { Car, ShieldCheck, Globe, Users, BookOpen, Award, Facebook, Instagram } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: "Free Pick up and Drop-off",
    description: "Convenient door-to-door service throughout Melbourne West and surrounding areas.",
    color: "bg-red-100 text-red-600"
  },
  {
    icon: Award,
    title: "6 Years+ Experienced Driving Instructor",
    description: "Professional instruction from Waseem, who has been teaching since 2018.",
    color: "bg-red-100 text-red-600"
  },
  {
    icon: Users,
    title: "Male and Female Instructors Available",
    description: "We have both male and female instructors available to ensure every learner feels comfortable and supported.",
    color: "bg-red-100 text-red-600"
  },
  {
    icon: Globe,
    title: "Overseas Licence Conversions",
    description: "Expert guidance on converting your international licence to a Victorian licence.",
    color: "bg-red-100 text-red-600"
  },
  {
    icon: BookOpen,
    title: "Get Assistance with your Log book",
    description: "Help with completing your learner logbook requirements and documentation.",
    color: "bg-red-100 text-red-600"
  },
  {
    icon: ShieldCheck,
    title: "Automatic Car Driving School",
    description: "Learn in modern, well-maintained automatic vehicles for easier learning.",
    color: "bg-red-100 text-red-600"
  }
];

const ServicesSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black">Our Services</h2>
        <div className="w-20 h-1 bg-red-600 mt-2 mx-auto"></div>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Everything you need to become a confident and licensed driver.</p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300">
            <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
              <service.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-black">{service.title}</h3>
            <p className="mt-2 text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="bg-blue-600 text-white rounded-2xl p-8">
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
      </div>

      <div className="mt-8 text-center">
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white rounded-2xl p-8">
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

export default ServicesSection;