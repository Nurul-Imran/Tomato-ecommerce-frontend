import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { ImCross } from "react-icons/im";

import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = ({ setIsOpenSignUp }) => {
  const [activeMenu, setActiveMenu] = useState("home");
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sideMenuClosing, setSideMenuClosing] = useState(false);

  const handleSideMenuClose = () => {
    setSideMenuClosing(true);
    setTimeout(() => setIsSideMenuOpen(false), 500);
  }

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav id="nav" className={`${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo">
            <Link to="/">
              <img src={assets.logo} alt="Logo" />
            </Link>
          </div>
          <ul className="menu">
            <li
              className={activeMenu === "home" ? "active" : ""}
              onClick={() => setActiveMenu("home")}
            >
              <Link to="/">home</Link>
            </li>
            <li
              className={activeMenu === "menu" ? "active" : ""}
              onClick={() => setActiveMenu("menu")}
            >
              <a href="#explore_menu">Menu</a>
            </li>
            <li
              className={activeMenu === "mobile-app" ? "active" : ""}
              onClick={() => setActiveMenu("mobile-app")}
            >
              <a href="#download_app">mobile app</a>
            </li>
            <li
              className={activeMenu === "contact-us" ? "active" : ""}
              onClick={() => setActiveMenu("contact-us")}
            >
              <a href="#footer">contact us</a>
            </li>
          </ul>
          <div className="menu_right">
            <div className="search_icon">
              <img src={assets.search_icon} alt="Search Icon" />
            </div>
            <div className="cart_icon_box">
              <Link>
                <img src={assets.basket_icon} alt="Cart Icon" />
              </Link>
              <div className="dot"></div>
            </div>
            <button onClick={() => setIsOpenSignUp(true)}>Sign in</button>
          </div>
          <div className="side_menu_bar">
            <IoMenu onClick={() => {
              setSideMenuClosing(false);
              setIsSideMenuOpen(true)
            }} />
            {isSideMenuOpen && (
              <div className={`side_menu ${sideMenuClosing ? "closed" : "opened"}`}>
                <ul className="menu">
                  <li
                    className={activeMenu === "home" ? "active" : ""}
                    onClick={() => setActiveMenu("home")}
                  >
                    <Link to="/">home</Link>
                  </li>
                  <li
                    className={activeMenu === "menu" ? "active" : ""}
                    onClick={() => setActiveMenu("menu")}
                  >
                    <a href="#explore_menu">Menu</a>
                  </li>
                  <li
                    className={activeMenu === "mobile-app" ? "active" : ""}
                    onClick={() => setActiveMenu("mobile-app")}
                  >
                    <a href="#download_app">mobile app</a>
                  </li>
                  <li
                    className={activeMenu === "contact-us" ? "active" : ""}
                    onClick={() => setActiveMenu("contact-us")}
                  >
                    <a href="#footer">contact us</a>
                  </li>
                </ul>
                <div className="menu_right">
                  <div className="search_icon">
                    <img src={assets.search_icon} alt="Search Icon" />
                  </div>
                  <div className="cart_icon_box">
                    <Link>
                      <img src={assets.basket_icon} alt="Cart Icon" />
                    </Link>
                    <div className="dot"></div>
                  </div>
                  <button
                    onClick={() => {
                      setIsOpenSignUp(true);
                      setIsSideMenuOpen(false);
                    }}
                  >
                    Sing in
                  </button>
                </div>
                <div className="cross">
                  <ImCross onClick={handleSideMenuClose} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
