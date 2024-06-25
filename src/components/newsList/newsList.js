import React, { useEffect } from "react";
import './newsList.css';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../../features/allNews/allNewsSlice";
import arrow from '../../images/Arrow_right.svg';
import arrowWhite from '../../images/Arrow_right-white.svg'
import logo from '../../images/logo.png';
import { format } from 'date-fns';

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

  // Сортировка новостей по дате
  const sortedNews = [...news].sort((a, b) => b.newsDate.toDate() - a.newsDate.toDate());
  const mainNews = sortedNews[0]; // Главная новость (последняя по дате)
  const secondNews = sortedNews.slice(1, 4); // Все остальные новости, начиная со второй
  const otherNews = sortedNews.slice(4);

  return (
    <div className="news-list div-row">
        <h1>Latest News</h1>
        <div className="first-news-column div-column">
            {mainNews && (
              <div key={mainNews.newsID} className="news-item-div div-column">
                <NavLink to={`/${mainNews.newsID}`} className="news-item div-row" style={{ backgroundImage: `url(${mainNews.newsImage ? mainNews.newsImage : logo})` }}>
                  <div className="date-area">
                    <p>Date: {format(mainNews.newsDate.toDate(), 'dd/MM/yyyy')}</p>
                  </div>
                  <div className="item-text-button-area div-row">
                    <h2>{mainNews.newsTitle}</h2>
                    <div className="item-button-area">
                        <img src={arrowWhite} alt='' />
                    </div>
                  </div>
                  
                </NavLink>
              </div>
            )}
        </div>
        <div className="second-news-column div-row">
            {secondNews.map((newsItem) => (
              <div key={newsItem.newsID} className="news-item-div div-column">
                <NavLink to={`/${newsItem.newsID}`} className="news-item div-row">
                  <div className="item-image-area">
                    <img src={newsItem.newsImage ? newsItem.newsImage : logo} alt="" />
                  </div>
                  <div className="item-text-area div-column">
                    <h2>{newsItem.newsTitle}</h2>
                    <p>Date: {format(newsItem.newsDate.toDate(), 'dd/MM/yyyy')}</p>
                  </div>
                  <div className="item-button-area">
                    <img src={arrow} alt='' />
                  </div>
                </NavLink>
              </div>
            ))}
        </div>
        <div className="other-news-column div-row">
            {otherNews.map((newsItem) => (
              <div key={newsItem.newsID} className="news-item-div div-column">
                <NavLink to={`/${newsItem.newsID}`} className="news-item div-row">
                  <div className="item-image-area">
                    <img src={newsItem.newsImage ? newsItem.newsImage : logo} alt="" />
                  </div>
                  <div className="item-text-area div-column">
                    <h2>{newsItem.newsTitle}</h2>
                    <p>Date: {format(newsItem.newsDate.toDate(), 'dd/MM/yyyy')}</p>
                  </div>
                  <div className="item-button-area">
                    <img src={arrow} alt='' />
                  </div>
                </NavLink>
              </div>
            ))}
        </div>
    </div>
  );
};

export default NewsList;
