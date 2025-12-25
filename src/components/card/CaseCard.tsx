import "@styles/components/card/CaseCard.css";

type CaseCardProps = {
  title: string;
  callout?: string;
  description?: string;
  highlights?: string[];
  chips?: string[];
};

const CaseCard = ({
  title,
  callout,
  description,
  highlights,
  chips,
}: CaseCardProps) => {
  const hasHighlights = Boolean(highlights?.length);
  const hasChips = Boolean(chips?.length);

  return (
    <section className="case-card">
      <h3 className="case-h2">{title}</h3>

      {description && <p className="case-p">{description}</p>}

      {callout && (
        <div className="case-callout">
          <strong>Ownership:</strong> {callout}
        </div>
      )}

      {hasHighlights && (
        <ul className="case-list">
          {highlights!.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      {hasChips && (
        <div className="case-chips">
          {chips!.map(chip => (
            <span className="case-chip" key={chip}>
              {chip}
            </span>
          ))}
        </div>
      )}
    </section>
  );
};

export default CaseCard;
