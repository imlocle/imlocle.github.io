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

export type ProjectLink = {
  github?: string;
  live?: string;
  download?: string;
};

export type CaseStudyConfig = {
  pageTitle: string;
  pageSubtitle: string;
  heroTopline: string;
  heroTitle: string;
  heroSubtitle: string;
  stats: CaseStudyStat[];
  sections: CaseStudySection[];

  technologies: string[];
  nextStepsBody: string;
  projectLinks?: ProjectLink;

  showCta?: boolean;
};
