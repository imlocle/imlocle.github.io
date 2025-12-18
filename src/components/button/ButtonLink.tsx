import { Link, useLocation } from "react-router-dom";
import "@styles/components/button/ButtonLink.css";

type ButtonLinkProps = {
  link: string;
  text: string;
  className?: string;
  target?: "_blank" | "_self";
};

const isExternalUrl = (url: string) => /^https?:\/\//i.test(url);

const ButtonLink = ({
  link,
  text,
  className = "btn btn-primary",
  target,
}: ButtonLinkProps) => {
  const { pathname } = useLocation();

  // External URL
  if (isExternalUrl(link)) {
    const t = target || "_blank";
    return (
      <a
        href={link}
        className={className}
        target={t}
        rel={t === "_blank" ? "noopener noreferrer" : undefined}
      >
        {text}
      </a>
    );
  }

  // Hash-only link (same page): "#pricing"
  if (link.startsWith("#")) {
    return (
      <a
        href={link}
        className={className}
        onClick={e => {
          e.preventDefault();
          const id = decodeURIComponent(link.slice(1));
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          // also update URL hash without full navigation
          window.history.pushState(null, "", `${pathname}${link}`);
        }}
      >
        {text}
      </a>
    );
  }

  // Internal route (with or without hash)
  return (
    <Link to={link} className={className} target={target}>
      {text}
    </Link>
  );
};

export default ButtonLink;
