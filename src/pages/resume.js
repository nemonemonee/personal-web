import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function ResumePage() {
  return (
    <>
      <Seo title="Resume" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="cv" heading="Lingji Kong" />
      </Page>
    </>
  );
}
