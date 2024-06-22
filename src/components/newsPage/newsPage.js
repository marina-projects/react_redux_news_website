import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import CommentForm from '../commentForm/commentForm';
import { useSelector } from 'react-redux';

const NewsPage = () => {
  const allNews = useSelector((state) => state.allNews)

  const { id } = useParams();
  const article = allNews.find(item => item.newsID === parseInt(id));


  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className='news-page'>
        <NavLink to='/'>Back to news</NavLink>
        <h1>{article.newsTitle}</h1>
        <img src={article.newsImage} alt="" />
        <p>{article.newsShortText}</p>
        <CommentForm />
    </div>
  );
};

export default NewsPage;
