import { Hero } from "@/components/Hero";
import { ProblemPromise } from "@/components/ProblemPromise";
import { Mechanism } from "@/components/Mechanism";
import { CoachBio } from "@/components/CoachBio";
import { WhatYouGet } from "@/components/WhatYouGet";
import { ChooseYourEnd } from "@/components/ChooseYourEnd";
import { Testimonials } from "@/components/Testimonials";
import { WhyDifferent } from "@/components/WhyDifferent";
import { HowItWorks } from "@/components/HowItWorks";
import { FeelsLike } from "@/components/FeelsLike";
import { FAQ } from "@/components/FAQ";
import { BookingSection } from "@/components/BookingSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Ethos } from "@/components/Ethos";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="grain relative">
      <Hero />
      <ProblemPromise />
      <Mechanism />
      <CoachBio />
      <WhatYouGet />
      <ChooseYourEnd />
      <Testimonials />
      <WhyDifferent />
      <HowItWorks />
      <FeelsLike />
      <FAQ />
      <BookingSection />
      <FinalCTA />
      <Ethos />
      <Footer />
    </div>
  );
};

export default Index;
