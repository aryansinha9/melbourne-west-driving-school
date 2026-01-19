"use client"; // Required for hooks like useState and useRouter
import React, { useState, useEffect } from "react";
import ShapeBlur from './ShapeBlur';
import Link from 'next/link'; // Use Next.js Link for navigation
import Image from 'next/image'; // Use Next.js Image for optimization
import { useRouter } from 'next/router'; // Use Next.js Router to get the current path
import { Button } from "@/components/ui/button";
import { Phone, Facebook, Menu, X, Instagram } from "lucide-react";

export default function Layout({ children }) {
  const router = useRouter(); // Hook to get router information
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { title: "Home", url: "/" },
    { title: "Prices", url: "/prices" },
    { title: "Reviews", url: "/reviews" },
  ];

  // The logic is the same, but we get the path from `router.pathname`
  const isActiveLink = (url) => router.pathname === url;

  // Header scroll behavior
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;

        // Hide if scrolling down and requested functionality
        // Show if scrolling up
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className={`bg-white/80 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-100 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d13cf9dba1da4cde959c5c/dca4ed10c_GeneratedImageSeptember222025-10_52PM1.png"
                alt="Melbourne West Driving School Logo"
                width={48} // Add width
                height={48} // Add height
                className="h-12 w-auto"
              />
              <div>
                <span className="text-xl font-bold text-black">Melbourne West</span>
                <p className="text-sm text-gray-600 -mt-1">Driving School</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className={`text-sm font-medium transition-colors ${isActiveLink(item.url)
                      ? "text-red-600"
                      : "text-gray-700 hover:text-red-600"
                    }`}
                >
                  {item.title}
                </Link>
              ))}
              <Button
                asChild
                className="bg-red-600 text-white hover:bg-red-700 rounded-full px-6 py-2.5 text-sm font-semibold shadow-md hover:shadow-lg transition-all"
              >
                <a href="tel:0430474492">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 p-4">
            <nav className="flex flex-col gap-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-md text-base font-medium ${isActiveLink(item.url)
                      ? "bg-red-50 text-red-600"
                      : "text-gray-700 hover:bg-gray-50"
                    }`}
                >
                  {item.title}
                </Link>
              ))}
              <Button
                asChild
                className="w-full bg-red-600 text-white hover:bg-red-700 rounded-full py-3 text-base font-semibold"
              >
                <a href="tel:0430474492">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now: 0430 474 492
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content: This is where the page content will be injected */}
      <main className="pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d13cf9dba1da4cde959c5c/dca4ed10c_GeneratedImageSeptember222025-10_52PM1.png"
                  alt="Melbourne West Driving School Logo"
                  width={48} // Add width
                  height={48} // Add height
                  className="h-12 w-auto"
                />
                <div>
                  <span className="text-xl font-bold text-white">Melbourne West</span>
                  <p className="text-sm text-gray-400 -mt-1">Driving School</p>
                </div>
              </div>
              <p className="text-gray-400 max-w-md">
                Your trusted partner in becoming a safe and confident driver. We offer professional, multilingual instruction tailored to your needs.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base font-semibold text-white mb-4">Navigation</h3>
              <ul className="space-y-3">
                {navigationItems.map(item => (
                  <li key={item.title}>
                    <Link href={item.url} className="text-gray-400 hover:text-red-500 transition-colors">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="text-base font-semibold text-white mb-4">Get In Touch</h3>
              <ul className="space-y-4">
                <li>
                  <a href="tel:0430474492" className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors">
                    <Phone className="w-5 h-5" />
                    <span>0430 474 492</span>
                  </a>
                </li>
                <li>
                  <p className="text-gray-400">Languages: English, Hindi, Telugu, Urdu</p>
                </li>
                <li className="flex gap-4">
                  <a href="https://www.facebook.com/meldrivingschool" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/melbournewestdrivingschool?utm_source=ig_web_button_share_sheet&igsh=engybnFzenBxYTRk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500">
                    <Instagram className="w-6 h-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Melbourne West Driving School. All Rights Reserved.</p>
          </div>
          <div className="mt-8 h-48 w-full relative">
            <ShapeBlur
              variation={0}
              pixelRatioProp={2}
              shapeSize={1.6}
              roundness={0.5}
              borderSize={0.25}
              circleSize={0.4}
              circleEdge={1.0}
              className="w-full h-full"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}