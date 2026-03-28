import React, { useState } from 'react';
import { Phone, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    suburb: '',
    bookingType: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_API_KEY',
          subject: `New Booking Enquiry from ${formData.name}`,
          from_name: 'Melbourne West Driving School Website',
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', suburb: '', bookingType: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-50 pt-16 pb-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black">Contact Us</h1>
          <div className="w-20 h-1 bg-red-600 mt-3 mx-auto" />
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your driving journey? Fill in the form below or get in touch directly.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Left: Direct Contact */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-2">Get In Touch Directly</h2>
              <div className="w-16 h-1 bg-red-600 mb-8" />
              <p className="text-gray-600 mb-8 text-lg">
                Prefer to speak with us straight away? Call or send a text message to Waseem.
              </p>

              <div className="flex flex-col gap-4">
                <a href="tel:0430474492" className="w-full">
                  <Button
                    size="lg"
                    className="w-full bg-red-600 text-white hover:bg-red-700 rounded-2xl px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
                  >
                    <Phone className="w-5 h-5" />
                    Call: 0430 474 492
                  </Button>
                </a>

                <a href="sms:0430474492" className="w-full">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-red-600 text-red-600 hover:bg-red-50 rounded-2xl px-8 py-6 text-base font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Text: 0430 474 492
                  </Button>
                </a>
              </div>

              <div className="mt-10 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-semibold text-black mb-1">Email</h3>
                <a href="mailto:melbournewestds@gmail.com" className="text-red-600 hover:underline">
                  melbournewestds@gmail.com
                </a>
                <p className="text-sm text-gray-500 mt-3">
                  We teach in <span className="font-medium text-gray-700">English, Hindi, Telugu &amp; Urdu</span>.
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Servicing Melbourne West and surrounding suburbs.
                </p>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-2">Book Your Lesson</h2>
              <div className="w-16 h-1 bg-red-600 mb-8" />

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500" />
                  <h3 className="text-2xl font-bold text-black">Booking Received!</h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll be in touch with you shortly.
                  </p>
                  <Button
                    onClick={() => setStatus('idle')}
                    className="mt-4 bg-red-600 text-white hover:bg-red-700 rounded-full px-8 py-3"
                  >
                    Submit Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="04XX XXX XXX"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Suburb */}
                  <div>
                    <label htmlFor="suburb" className="block text-sm font-semibold text-gray-700 mb-1">
                      Suburb <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="suburb"
                      name="suburb"
                      type="text"
                      required
                      value={formData.suburb}
                      onChange={handleChange}
                      placeholder="e.g. Werribee"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Booking Type */}
                  <div>
                    <label htmlFor="bookingType" className="block text-sm font-semibold text-gray-700 mb-1">
                      I am booking a... <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="bookingType"
                      name="bookingType"
                      required
                      value={formData.bookingType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-white appearance-none"
                    >
                      <option value="" disabled>Select an option...</option>
                      <option value="Lesson">Lesson</option>
                      <option value="Test">Test</option>
                      <option value="Lesson + Test Package">Lesson + Test Package</option>
                    </select>
                  </div>

                  {status === 'error' && (
                    <p className="text-red-600 text-sm">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-red-600 text-white hover:bg-red-700 rounded-xl px-8 py-4 text-base font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {status === 'loading' ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Booking Request
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-gray-400 text-center">
                    We'll get back to you as soon as possible.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
