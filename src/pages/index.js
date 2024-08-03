import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Lingji Kong" />
      <Page useSplashScreenAnimation>
        {/* <HeroSection sectionId="hero" /> */}
        <AboutSection sectionId="about" heading="About Me" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        {/* <ProjectsSection sectionId="ongoingprojects" heading="OnGoing Projects" /> */}
        <ProjectsSection sectionId="projects" heading="Projects" />
        <InterestsSection sectionId="interests" heading="Skills" />
        <ContactSection sectionId="contact" heading="Contact" />
      </Page>
    </>
  );
}
