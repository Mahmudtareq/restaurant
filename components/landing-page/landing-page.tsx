import React from "react";
import LandingHero from "./hero-section/landing-hero";
import AboutSection from "./about-section/about-section";
import OurChefsHome from "./our-chefs-section/our-chefs-home";
import ExperienceHero from "./experience-section/experience-hero";
import ContactSectionPage from "./contact-section/contact-section-page";
import ReviewCarousel from "./review-section/review-carousel";

const LandingPage = () => {
  return (
    <>
      <LandingHero />
      <AboutSection />
      <OurChefsHome />
      <ContactSectionPage />
      <ExperienceHero />
      <ReviewCarousel />
    </>
  );
};

export default LandingPage;
