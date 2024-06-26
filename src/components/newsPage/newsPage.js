// import React from 'react';
// import { NavLink, useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import CommentForm from '../commentForm/commentForm';
// import CommentsList from '../comments/comments';
// import './newsPage.css';
// import logo from '../../images/logo.png';
// import leftArrow from '../../images/Expand_left.svg';

// const NewsPage = () => {
//   const { news } = useSelector((state) => state.allNews);
//   const { id } = useParams();
//   const article = news.find(item => item.newsID === parseInt(id));

//   if (!article) {
//     return <div>Article not found</div>;
//   }

//   return (
//     <div className="news-page div-column">
//       <div className='hero-section div-column' style={{backgroundImage:`url(${article.newsImage ? article.newsImage : logo})`}}>
//         <NavLink to="/"><img src={leftArrow} alt=""/>Back to news</NavLink>
//         <h1>{article.newsTitle}</h1>
//         <h2>{article.newsShortText}</h2>
//       </div>
//       <div className='article-main div-column'>
//         <div className='article-content div-column'>
//           <p>{article.newsContent}</p>
//         </div>
//         <div className='article-comments-area div-column'>
//             <CommentsList newsID={parseInt(id)} />
//             <CommentForm newsID={parseInt(id)} />

          
//         </div>
        
//       </div>
      
//     </div>
//   );
// };

// export default NewsPage;


import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from '../../features/allNews/allNewsSlice';
import CommentForm from '../commentForm/commentForm';
import CommentsList from '../comments/comments';
import './newsPage.css';
import logo from '../../images/logo.png';
import leftArrow from '../../images/Expand_left.svg';

const NewsPage = () => {
  const dispatch = useDispatch();
  const { news, isLoading } = useSelector((state) => state.allNews);
  const { id } = useParams();

  useEffect(() => {
    if (!news.length) {
      dispatch(fetchNews());
    }
  }, [dispatch, news]);

  const article = news.find(item => item.newsID === parseInt(id));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="news-page div-column">
      <div className='hero-section div-column' style={{backgroundImage:`url(${article.newsImage ? article.newsImage : logo})`}}>
        <NavLink to="/"><img src={leftArrow} alt=""/>Back to news</NavLink>
        <h1>{article.newsTitle}</h1>
        <h2>{article.newsShortText}</h2>
      </div>
      <div className='article-main div-column'>
        <div className='article-content div-column'>
          <p>{article.newsContent}</p>
        </div>
        <div className='article-comments-area div-column'>
            <CommentsList newsID={parseInt(id)} />
            <CommentForm newsID={parseInt(id)} />
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
