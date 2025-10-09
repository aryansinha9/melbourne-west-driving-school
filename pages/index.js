import HeroSection from '@/components/HeroSection';
import AboutUsSection from '@/components/AboutUsSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SuccessStoriesSection from '@/components/SuccessStoriesSection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <TestimonialsSection />
      <SuccessStoriesSection />
      <ContactSection />
    </>
  );
}