import "@styles/components/bar/CaseStudySidebar.css";
import CaseCard from "@components/card/CaseCard";

type Props = {
  technologies: string[];
  nextStepsBody: string;
};

const CaseStudySidebar = ({ technologies, nextStepsBody }: Props) => {
  return (
    <aside className="case-sidebar" aria-label="Case study sidebar">
      <CaseCard title="Technologies" chips={technologies} />
      <CaseCard title="What I'd Do Next" description={nextStepsBody} />
    </aside>
  );
};

export default CaseStudySidebar;
