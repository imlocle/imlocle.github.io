type Props = {
  technologies: string[];
  nextStepsTitle?: string;
  nextStepsBody: string;
};

const CaseStudySidebar = ({
  technologies,
  nextStepsTitle = "What I'd Do Next",
  nextStepsBody,
}: Props) => {
  return (
    <aside className="case-sidebar" aria-label="Case study sidebar">
      <section className="case-card">
        <h3 className="case-h2">Technologies</h3>
        <div className="case-chips">
          {technologies.map(tech => (
            <span className="case-chip" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="case-card">
        <h3 className="case-h2">{nextStepsTitle}</h3>
        <p className="case-p">{nextStepsBody}</p>
      </section>
    </aside>
  );
};

export default CaseStudySidebar;
