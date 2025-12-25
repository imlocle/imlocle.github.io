export type CaseStudyStat = {
  label: string;
  value: string;
};

export type CaseStudySection = {
  id: string;
  title: string;
  callout?: string;
  description?: string;
  highlights?: string[];
};

export type CaseStudyConfig = {
  pageTitle: string;
  heroTopline: string;
  heroTitle: string;
  heroSubtitle: string;
  stats: CaseStudyStat[];
  sections: CaseStudySection[];

  technologies: string[];
  nextStepsBody: string;

  showCta?: boolean;
};
