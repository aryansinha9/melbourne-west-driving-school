import HeroSection from '@/components/HeroSection';
import AboutUsSection from '@/components/AboutUsSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SocialSection from '@/components/SocialSection';
import SuccessStoriesSection from '@/components/SuccessStoriesSection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <SuccessStoriesSection />
      <TestimonialsSection />
      <SocialSection />
      <ContactSection />
    </>
  );
}