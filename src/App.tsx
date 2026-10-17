import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemPromise } from './components/ProblemPromise';
import { HowItWorks } from './components/HowItWorks';
import { InteractiveLoyaltyCard } from './components/InteractiveLoyaltyCard';
import { InteractiveWorkflowModal } from './components/InteractiveWorkflowModal';
import { FeaturesBento } from './components/FeaturesBento';
import { RoleSwitcher } from './components/RoleSwitcher';
import { MultiTenantArchitecture } from './components/MultiTenantArchitecture';
import { IndustryShowcase } from './components/IndustryShowcase';
import { TechStack } from './components/TechStack';
import { ZFHCaseStudy } from './components/ZFHCaseStudy';
import { FinalCTA } from './components/FinalCTA';
import { ContactForm } from './components/ContactForm';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { InquiryType, BusinessType } from './types';

export default function App() {
  const [isWorkflowModalOpen, setIsWorkflowModalOpen] = useState(false);
  const [formInquiryType, setFormInquiryType] = useState<InquiryType>('demo');
  const [formBusinessType, setFormBusinessType] = useState<BusinessType>('cafe');

  const scrollToContact = (inquiryType: InquiryType = 'demo', businessType?: BusinessType) => {
    setFormInquiryType(inquiryType);
    if (businessType) {
      setFormBusinessType(businessType);
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExperience = () => {
    const element = document.getElementById('interactive-demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectIndustryFromShowcase = (type: BusinessType) => {
    scrollToContact('demo', type);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#29332E] selection:bg-[#91A894] selection:text-[#FFFFFF] relative antialiased flex flex-col font-sans">
      {/* Sticky Header */}
      <Header 
        onRequestDemo={() => scrollToContact('demo')}
        onExploreExperience={scrollToExperience}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero Section */}
        <Hero
          onRequestDemo={() => scrollToContact('demo')}
          onExploreExperience={scrollToExperience}
          onOpenWorkflowSimulator={() => setIsWorkflowModalOpen(true)}
        />

        {/* Section 2: Problem & Promise (Paper vs QR) */}
        <ProblemPromise />

        {/* Section 3: How It Works */}
        <HowItWorks 
          onOpenWorkflowSimulator={() => setIsWorkflowModalOpen(true)}
        />

        {/* Section 4: Interactive Loyalty Card Demo */}
        <InteractiveLoyaltyCard />

        {/* Section 5: Bento Grid Feature Highlights */}
        <FeaturesBento />

        {/* Section 6: Four Roles, One Coherent System */}
        <RoleSwitcher />

        {/* Section 7: Multi-Tenant Architecture & Data Isolation */}
        <MultiTenantArchitecture />

        {/* Section 8: Industry Showcase */}
        <IndustryShowcase 
          onSelectIndustry={handleSelectIndustryFromShowcase}
        />

        {/* Section 9: Technology Stack & Pipeline */}
        <TechStack />

        {/* Section 10: ZFH Story & Project Case Study */}
        <ZFHCaseStudy />

        {/* Section 11: Final Call to Action */}
        <FinalCTA 
          onSelectInquiry={(type) => scrollToContact(type)}
        />

        {/* Section 12: Request Demo & Contact Form */}
        <ContactForm 
          initialInquiryType={formInquiryType}
          initialBusinessType={formBusinessType}
        />

        {/* Section 13: FAQ Section */}
        <FAQSection />
      </main>

      {/* Section 14: Refined Footer */}
      <Footer />

      {/* Interactive 4-Step Counter Sandbox Modal */}
      <InteractiveWorkflowModal
        isOpen={isWorkflowModalOpen}
        onClose={() => setIsWorkflowModalOpen(false)}
      />
    </div>
  );
}
