import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CommentForm from '../commentForm/commentForm';
import CommentsList from '../comments/comments';

const NewsPage = () => {
  const { news } = useSelector((state) => state.allNews);
  const { id } = useParams();
  const article = news.find(item => item.newsID === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="news-page">
      <NavLink to="/">Back to news</NavLink>
      <h1>{article.newsTitle}</h1>
      <img src={article.newsImage} alt="" />
      <p>{article.newsShortText}</p>
      <CommentsList newsID={parseInt(id)} />
      <CommentForm newsID={parseInt(id)} />
    </div>
  );
};

export default NewsPage;
