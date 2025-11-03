import React, { useState } from 'react';

import { assets } from '../../assets/assets';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState('home');
    return (
        <nav id='nav'>
            <div className="container">
                <div className="nav_wrapper">
                    <div className="logo">
                        <Link to="/"><img src={assets.logo} alt="Logo" /></Link>
                    </div>
                    <ul className="menu">
                        <li className={activeMenu === "home" && "active"} onClick={() => setActiveMenu("home")}><a href="#">home</a></li>
                        <li className={activeMenu === "menu" && "active"} onClick={() => setActiveMenu("menu")}><a href="#">Menu</a></li>
                        <li className={activeMenu === "mobile-app" && "active"} onClick={() => setActiveMenu("mobile-app")}><a href="#">mobile app</a></li>
                        <li className={activeMenu === "contact-us" && "active"} onClick={() => setActiveMenu("contact-us")}><a href="#">contact us</a></li>
                    </ul>
                    <div className="menu_right">
                        <div className="search_icon">
                            <img src={assets.search_icon} alt="Search Icon" />
                        </div>
                        <div className="cart_icon_box">
                           <Link><img src={assets.basket_icon} alt="Cart Icon" /></Link> 
                            <div className="dot"></div>
                        </div>
                        <button>Sing in</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar