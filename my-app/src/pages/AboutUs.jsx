import React from 'react';
import WebsiteLayout from '../layouts/WebsiteLayout';
import AboutSection from '../components/AboutSection';
import BusinessSection from '../components/BusinessSection';
import ImpactSection from '../components/ImpactSection';
import PublicPolicySection from '../components/PublicPolicySection';

const AboutUsPage = () => {

  return (
    <WebsiteLayout>
        <AboutSection />
        <BusinessSection />
        <ImpactSection />
        <PublicPolicySection />
    </WebsiteLayout>
  );
};

export default AboutUsPage;