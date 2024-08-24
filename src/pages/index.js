import React from "react";
import {
  Section,
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
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        {/* <ProjectsSection sectionId="ongoingprojects" heading="OnGoing Projects" /> */}
        {/* <ProjectsSection sectionId="current_projects" heading="Ongoing Projects" /> */}
        <ProjectsSection sectionId="current" heading="Ongoing Research" />
        <ProjectsSection sectionId="projects" heading="Projects" />
        
        <Section heading="Skills">
          <InterestsSection sectionId="language" heading="Programming Languages" />
          <InterestsSection sectionId="framework" heading="Frameworks" />
        </Section>
        
        <ContactSection sectionId="contact" heading="Contact" />
        
      </Page>
    </>
  );
}
