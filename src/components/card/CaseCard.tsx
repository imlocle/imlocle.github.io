type CaseCardProps = {
  title: string;
  callout?: string;
  description?: string;
  highlights?: string[];
};

const CaseCard = ({
  title,
  callout,
  description,
  highlights,
}: CaseCardProps) => {
  const hasHighlights = Boolean(highlights?.length);

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
    </section>
  );
};

export default CaseCard;
