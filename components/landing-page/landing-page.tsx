import React from "react";
import LandingHero from "./hero-section/landing-hero";
import AboutSection from "./about-section/about-section";
import OurChefsHome from "./our-chefs-section/our-chefs-home";
import ExperienceHero from "./experience-section/experience-hero";
import ContactSectionPage from "./contact-section/contact-section-page";

const LandingPage = () => {
  return (
    <>
      <LandingHero />
      <AboutSection />
      <OurChefsHome />
      <ContactSectionPage />
      <ExperienceHero />
    </>
  );
};

export default LandingPage;
