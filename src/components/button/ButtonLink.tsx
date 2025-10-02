import { Link } from "react-router-dom";
import '../../styles/button/ButtonLink.css'

const ButtonLink = ({
    link,
    text,
}: {
    link: string,
    text: string,
}) => {
    return (
        <Link to={link} className="button-link">
        {text}
      </Link>
    )
}

export default ButtonLink