import React from "react";
import './header.css';
import logo from '../../images/logo.png';


const Header = ( ) => {

    return (
        <div className="main-menu div-row">
            <div className="logo-area">
                <img src={logo} alt='logo' />
            </div>
            <div className="title-area div-column">
                <p>Learning React/Redux Project</p>
            </div>
            <div className="button-area div-column">
                <a href="https://github.com/marina-projects/react_redux_news_website" target="_blank" rel="noreferrer"><button>GitHub</button></a>
            </div>
        </div>
    )
}

export default Header;