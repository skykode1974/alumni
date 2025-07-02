'use client';

import HeroSection from '@/components/HeroSection';
import WhoWeServe from '@/components/WhoWeServe';
import AnalysisOrbit from '@/components/AnalysisOrbit';
import NewsletterCTA from '@/components/NewsletterCTA';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';
import StickyChatButton from '@/components/StickyChatButton';
import ParticlesBackground from '@/components/ParticlesBackground';
import AboutUs from '@/components/AboutUs';
import SolutionSection from '@/components/SolutionSection';
import BlogSection from '@/components/BlogSection'; // ✅ Added

export default function Home() {
  return (
    <main>
      <ParticlesBackground />
      <HeroSection />
      <AnalysisOrbit />
      <SolutionSection />
     
      <AboutUs />
 <FinalCTA />
      <BlogSection /> {/* ✅ Inserted Blog Section here */}
      <StickyChatButton />
      <NewsletterCTA />
      <Footer />
    </main>
  );
}
