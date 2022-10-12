import React, {useEffect} from "react";
import {Outlet, Link} from 'react-router-dom'
import navHeader from '../assets/header.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLong } from '@fortawesome/free-solid-svg-icons'
const Header = () => {

  useEffect(() => {
    var myNav = document.querySelector('header');
    window.onscroll = function () { 
      console.log(document.body.scrollTop)
      if (window.scrollY > 300) {
          myNav.classList.add("white-navbar");
          myNav.classList.remove("color-navbar");
      } else {
          myNav.classList.add("color-navbar");
          myNav.classList.remove("white-navbar");
      }
    }}, [])
  return (
    <>
      <header>
        <div className="left-header">
            <img src={navHeader} alt="" className="header-img" />
            <h3> <span className="blue-text"> Wen's</span> Blog</h3>
        </div>
        <nav>
            <div className="dropdown">
                <Link to="/"><a href="#home"> Home <FontAwesomeIcon icon={faDownLong} /></a></Link>
                <div className="dropdown-content a-drop" >
                <Link to="/#jumbotron">Home </Link>
                <Link to="/#slider">Discover</Link>
                <Link to="/#services">Services</Link>
                  </div>
            </div>
            <Link to="/project"><a>My Project</a></Link>
            <Link to="/contact"><a>Contact</a></Link>
            <Link to="/about"><a>About Me</a></Link>
        </nav>
        <div className="side-bar">
        <FontAwesomeIcon icon={faDownLong} className="fa-solid fa-arrow-down-wide-short" />
            <i className="fa-solid fa-arrow-down-wide-short"></i>
            <div className="nav-drop">
                <div className="dropdown">
                <Link to="/"><a href="#home"> Home <FontAwesomeIcon icon={faDownLong} /></a></Link>
                    <div className="dropdown-content a-drop" >
                    <Link to="/#jumbotron">Home </Link>
                    <Link to="/#slider">Discover</Link>
                    <Link to="/#services">Services</Link>
                      </div>
                </div>
                <Link to="/project"><a>My Project</a></Link>
                <Link to="/contact"><a>Contact</a></Link>
                <Link to="/about"><a>About Me</a></Link>
            </div>
        </div>
    </header>
    <Outlet />
    </>
  );
};

export default Header;
