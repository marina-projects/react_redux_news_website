import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const NewsPage = ({ newsList }) => {
  const { id } = useParams();
  const article = newsList[id];

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className='news-page'>
        <NavLink to='/'>Back to news</NavLink>
        <h1>{article.newsTitle}</h1>
        <img src={article.newsImage} alt="" />
        <p>{article.newsShortText}</p>
    </div>
  );
};

export default NewsPage;
