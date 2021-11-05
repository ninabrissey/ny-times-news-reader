import { useEffect, useState } from 'react';
import { getData } from '../utils/apiCalls';
import '../SingleArticle/SingleArticle.css';

const SingleArticle = ({ section, id }) => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState('');

  useEffect(() => {
    const getSingleArticle = async () => {
      try {
        const data = await getData(section);
        const singleArticle = await data.results.find((article) =>
          article.short_url.includes(id)
        );
        setArticle(singleArticle);
        setIsLoading(false);
      } catch (error) {
        setErr(error);
      }
    };
    getSingleArticle();
  }, [section, id]);

  // I would have used a fetch call to get the individual article here
  // however, it looks like I don't have that as an option
  // I could change CardContainer to Container and make the
  // SingleArticle component a child of the

  return (
    <section>
      {err && <p>Something went wrong. Please refresh the page.</p>}
      {isLoading && !err ? (
        <p>Loading</p>
      ) : (
        <article className="single-article">
          <h2>{article.section.toUpperCase()}</h2>
          <h3>{article.title}</h3>
          <h4>
            {article.kicker} {article.byline}
          </h4>
          <img
            className="single-article-image"
            src={article.multimedia[0].url}
          />
          <p>Abstract: {article.abstract}</p>
          <p>Written: {article.created_date.split('T', 1)}</p>
          <p>Updated: {article.updated_date.split('T', 1)}</p>
          <p>
            Click <a href={article.url}>here</a> to view the full article on The
            New York Times website.
          </p>
          <p>
            Disclaimer: You may need to subscribe to The New York Times view the
            full article.
          </p>
        </article>
      )}
    </section>
  );
};

export default SingleArticle;
