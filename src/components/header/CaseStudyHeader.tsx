import type { CaseStudyStat } from "@models/caseStudy";

type Props = {
  topline: string;
  title: string;
  subtitle: string;
  stats: CaseStudyStat[];
};

const CaseStudyHeader = ({ topline, title, subtitle, stats }: Props) => {
  return (
    <header className="case-hero">
      <div className="case-hero-topline">{topline}</div>

      <h2 className="case-title">{title}</h2>

      <p className="case-subtitle">{subtitle}</p>

      <div className="case-stats" aria-label="Key outcomes">
        {stats.map(s => (
          <div className="case-stat" key={`${s.label}-${s.value}`}>
            <div className="case-stat-label">{s.label}</div>
            <div className="case-stat-value">{s.value}</div>
          </div>
        ))}
      </div>
    </header>
  );
};

export default CaseStudyHeader;
