import { useLocation } from "react-router-dom";

import "@styles/components/page/CaseStudyPage.css";
import TitleHeader from "@/components/header/TitleHeader";
import CtaSection from "@components/section/CtaSection";
import CaseCard from "@components/card/CaseCard";
import CaseStudyHeader from "@components/header/CaseStudyHeader";
import CaseStudySidebar from "@components/bar/CaseStudySidebar";

import type { CaseStudyConfig } from "@models/caseStudy";

type CaseStudyPageProps = {
  config: CaseStudyConfig;
  children?: React.ReactNode;
};

const CaseStudyPage = ({ config, children }: CaseStudyPageProps) => {
  const { pathname } = useLocation();

  return (
    <div className="page-container">
      <TitleHeader pathname={pathname} title={config.pageTitle} />

      <CaseStudyHeader
        topline={config.heroTopline}
        title={config.heroTitle}
        subtitle={config.heroSubtitle}
        stats={config.stats}
      />

      <div className="case-grid">
        <main className="case-main">
          {config.sections.map(item => (
            <CaseCard
              key={item.id}
              title={item.title}
              callout={item.callout}
              description={item.description}
              highlights={item.highlights}
            />
          ))}

          {children}
        </main>

        <CaseStudySidebar
          technologies={config.technologies}
          nextStepsBody={config.nextStepsBody}
        />
      </div>

      {config.showCta !== false && <CtaSection />}
    </div>
  );
};

export default CaseStudyPage;
