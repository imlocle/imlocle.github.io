import type { ReactNode } from "react";
import "@styles/components/card/IconCard.css";

interface IconCardProps {
  icon: ReactNode;
  title: string;
  items?: string[];
  description?: string;
  className?: string;
}

const IconCard = ({
  icon,
  title,
  items,
  description,
  className = "",
}: IconCardProps) => {
  return (
    <div className={`icon-card card-hover ${className}`}>
      <div className="icon-card__icon">{icon}</div>
      <h3 className="icon-card__title">{title}</h3>
      {description && <p className="icon-card__description">{description}</p>}
      {items && items.length > 0 && (
        <ul className="icon-card__list">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default IconCard;
