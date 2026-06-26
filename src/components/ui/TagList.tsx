import "@styles/components/ui/TagList.css";

type TagVariant = "tech" | "skill" | "pill" | "metric";

interface TagListProps {
  items: string[];
  variant?: TagVariant;
  className?: string;
}

const TagList = ({ items, variant = "tech", className = "" }: TagListProps) => {
  return (
    <div className={`tag-list ${className}`}>
      {items.map((item, i) => (
        <span key={i} className={`tag tag--${variant}`}>
          {item}
        </span>
      ))}
    </div>
  );
};

export default TagList;
