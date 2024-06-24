// import React, { useEffect } from "react";
// import './newsList.css';
// import { NavLink } from "react-router-dom";
// import { loadNews } from "../../features/allNews/allNewsSlice";
// import { useSelector, useDispatch } from "react-redux";


// const NewsList = () => {

//     const dispatch = useDispatch();
//     const allNews = useSelector((state) => state.allNews)

//     useEffect(() => {
//         dispatch(loadNews());
//       }, [dispatch]);
  
//     return (
//         <div className="news-list">
//             <h1>All news</h1>
//             {
//                 allNews.map((newsItem) => (
//                     <div className="news-item">
//                         <NavLink to={`/${newsItem.newsID}`}>
//                             <img src={newsItem.newsImage} alt="" />
//                             <h2>{newsItem.newsTitle}</h2>
//                             <p>{newsItem.newsShortText}</p>
//                             <p className="pseudo-button">Details</p>
//                         </NavLink>
//                     </div>
//                 ))
//             }
//         </div>
//     )
// }

// export default NewsList;

// NewsList.js

import React, { useEffect } from "react";
import './newsList.css';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../../features/allNews/allNewsSlice";

const NewsList = () => {
  const dispatch = useDispatch();
  const { news, isLoading, hasError } = useSelector((state) => state.allNews);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (hasError) {
    return <p>Error loading news.</p>;
  }

  return (
    <div className="news-list">
      <h1>All news</h1>
      {
        news.map((newsItem) => (
          <div className="news-item" key={newsItem.newsID}>
            <NavLink to={`/${newsItem.newsID}`}>
              <img src={newsItem.newsImage} alt="" />
              <h2>{newsItem.newsTitle}</h2>
              <p>{newsItem.newsShortText}</p>
              <p className="pseudo-button">Details</p>
            </NavLink>
          </div>
        ))
      }
    </div>
  );
};

export default NewsList;
