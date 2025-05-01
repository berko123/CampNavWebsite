import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/Testimonials';
import { CampusShowcase } from '../components/CampusShowcase';
import { ContactSection } from '../components/ContactSection';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <CampusShowcase />
      <Testimonials />
      <ContactSection />
    </>
  );
};