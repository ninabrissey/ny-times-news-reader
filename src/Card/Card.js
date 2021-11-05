import { Link } from 'react-router-dom';
import '../Card/Card.css';

const Card = ({ section, article }) => {
  const id =
    article.short_url.split('/')[article.short_url.split('/').length - 1];

  return (
    <Link className="card-link" to={`/${section}/${id}`}>
      <article className="card">
        <h3>{article.title}</h3>
        <h4>
          {article.kicker} {article.byline}
        </h4>
        <img className="card-image" src={article.multimedia[0].url} />
      </article>
    </Link>
  );
};

export default Card;
