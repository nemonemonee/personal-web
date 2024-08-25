import React from "react";
import {
  Section,
  AboutSection,
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
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <ProjectsSection sectionId="current" heading="Ongoing Research" fileName="current"/>
        <ProjectsSection sectionId="projects" heading="Projects" fileName="projects"/>
        <Section heading="Skills">
          <InterestsSection sectionId="languages" heading="Programming Languages" fileName="languages" />
          <InterestsSection sectionId="frameworks" heading="Frameworks" fileName="frameworks" />
          <InterestsSection sectionId="data" heading="Data Analysis Tool" fileName="data" />
        </Section>
        <ContactSection sectionId="contact" heading="Contact" />
        
      </Page>
    </>
  );
}
