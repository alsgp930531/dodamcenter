import HeroSection from '@/components/home/HeroSection';
import DodamMarquee from '@/components/home/DodamMarquee';
import BrandStory from '@/components/home/BrandStory';
import PhotoRibbon from '@/components/home/PhotoRibbon';
import ServiceShowcase from '@/components/home/ServiceShowcase';
import TrustIndicators from '@/components/home/TrustIndicators';
import ProgramPreview from '@/components/home/ProgramPreview';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DodamMarquee />
      <BrandStory />
      <PhotoRibbon />
      <ServiceShowcase />
      <TrustIndicators />
      <ProgramPreview />
      <CTASection />
    </>
  );
}
