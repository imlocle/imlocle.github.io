import { FiGithub, FiExternalLink, FiDownload } from "react-icons/fi";
import type { CaseStudyStat, ProjectLink } from "@models/caseStudy";

type Props = {
  topline: string;
  title: string;
  subtitle: string;
  stats: CaseStudyStat[];
  projectLinks?: ProjectLink;
};

const CaseStudyHeader = ({ topline, title, subtitle, stats, projectLinks }: Props) => {
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

      {projectLinks && (
        <div className="case-project-links">
          {projectLinks.github && (
            <a
              href={projectLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn"
            >
              <FiGithub /> View Code
            </a>
          )}
          {projectLinks.live && (
            <a
              href={projectLinks.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn"
            >
              <FiExternalLink /> Try Live
            </a>
          )}
          {projectLinks.download && (
            <a
              href={projectLinks.download}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-btn"
            >
              <FiDownload /> Download
            </a>
          )}
        </div>
      )}
    </header>
  );
};

export default CaseStudyHeader;
