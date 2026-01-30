import React from 'react';
import Hero from './components/hero';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import SocialProof from './components/socialProof';
import ProblemSolution from './components/problem';
import UseCases from './components/usecases';
import TrustAndSecurity from './components/TrustAndSecurity';
import WhyChooseTrybeSave from './components/WhyChooseTrybeSave';
import FAQ from './components/faq';

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <HowItWorks />
      <UseCases />
      <TrustAndSecurity />
      <WhyChooseTrybeSave />
      <FAQ />
      <CTA />
    </>
  );
};

export default LandingPage;
