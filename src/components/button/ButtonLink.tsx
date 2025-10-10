import { Link } from 'react-router-dom';
import '../../styles/button/ButtonLink.css';

const ButtonLink = ({
  link,
  text,
  className = 'primary-button',
}: {
  link: string;
  text: string;
  className?: string;
}) => {
  return (
    <Link to={link} className={className}>
      {text}
    </Link>
  );
};

export default ButtonLink;
