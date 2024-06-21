import React from "react";
import './newsList.css';
import { NavLink } from "react-router-dom";


const NewsList = ({ newsList }) => {
    return (
        <div className="news-list">
            <h1>All news</h1>
            {
                newsList.map((newsItem) => (
                    <div className="news-item">
                        <img src={newsItem.newsImage} alt="" />
                        <h2>{newsItem.newsTitle}</h2>
                        <p>{newsItem.newsShortText}</p>
                        <NavLink to={`/${newsItem.newsID}`}>Details</NavLink>
                    </div>
                ))
            }
        </div>
    )
}

export default NewsList;