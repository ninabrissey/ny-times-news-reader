import React from 'react';
import '../Card/Card.css';

const Card = ({ section, article }) => {
  console.log(article.title, 'article');
  return (
    <article className="card">
      <h2>{article.title}</h2>
    </article>
  );
};

export default Card;
