import { Link } from 'react-router-dom';
import '../../styles/button/ButtonLink.css';

const ButtonLink = ({
  link,
  text,
  className = 'primary-button',
  target = '',
}: {
  link: string;
  text: string;
  className?: string;
  target?: string;
}) => {
  return (
    <Link to={link} className={className} target={target}>
      {text}
    </Link>
  );
};

export default ButtonLink;
