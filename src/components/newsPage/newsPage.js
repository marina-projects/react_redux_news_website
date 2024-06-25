import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import CommentForm from '../commentForm/commentForm';
import { useSelector } from 'react-redux';
import CommentsList from '../comments/comments';

const NewsPage = () => {
  const { news } = useSelector((state) => state.allNews);

  const { id } = useParams();
  const article = news.find(item => item.newsID === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className='news-page'>
      <NavLink to='/'>Back to news</NavLink>
      <h1>{article.newsTitle}</h1>
      <img src={article.newsImage} alt="" />
      <p>{article.newsShortText}</p>
      {/* Передаем newsID в CommentsList */}
      <CommentsList newsID={article.newsID} />
      <CommentForm />
    </div>
  );
};

export default NewsPage;
