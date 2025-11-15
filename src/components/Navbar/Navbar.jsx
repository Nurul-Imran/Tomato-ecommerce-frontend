import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";

import { assets } from "../../assets/assets";
import "./Navbar.css";
import { storeContext } from "../../context/storeContext";
import { toast } from "react-toastify";

const Navbar = ({ setIsOpenSignUp }) => {
  const { cartItems } = useContext(storeContext);
  const [activeMenu, setActiveMenu] = useState("home");
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sideMenuClosing, setSideMenuClosing] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const sideMenuRef = useRef(null); //  Reference for side menu

  const handleSideMenuClose = () => {
    setSideMenuClosing(true);
    setTimeout(() => setIsSideMenuOpen(false), 500);
  };

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

  
  // Detect click outside of the side menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sideMenuRef.current &&
        !sideMenuRef.current.contains(event.target)
      ) {
        handleSideMenuClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSideMenuOpen]);

   useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = window.innerHeight * 0.2; // 20% of screen height
      const footerOffset = window.innerHeight * 0.5; // detect footer earlier

      const menu = document.getElementById("explore_menu");
      const mobileApp = document.getElementById("download_app");
      const contact = document.getElementById("footer");

      if (!menu || !mobileApp || !contact) return;

      if (scrollY >= contact.offsetTop - footerOffset) {
        setActiveMenu("contact-us");
      } else if (scrollY >= mobileApp.offsetTop - offset) {
        setActiveMenu("mobile-app");
      } else if (scrollY >= menu.offsetTop - offset) {
        setActiveMenu("menu");
      } else {
        setActiveMenu("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {

  }, [token])

  
  return (
    <nav id="nav" className={`${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo">
            <Link to="/">
              <img
                src={assets.logo}
                alt="Logo"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              />
            </Link>
          </div>
          <ul className="menu">
            <li
              className={activeMenu === "home" ? "active" : ""}
              onClick={() => {
                setActiveMenu("home");
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <Link to="/">home</Link>
            </li>
            <li
              className={activeMenu === "menu" ? "active" : ""}
            >
              <a href="#explore_menu">Menu</a>
            </li>
            <li
              className={activeMenu === "mobile-app" ? "active" : ""}
            >
              <a href="#download_app">mobile app</a>
            </li>
            <li
              className={activeMenu === "contact-us" ? "active" : ""}
            >
              <a href="#footer">contact us</a>
            </li>
          </ul>
          <div className="menu_right">
            <div className="search_icon">
              <img src={assets.search_icon} alt="Search Icon" />
            </div>
            <div className="cart_icon_box">
              <Link to="/cart" className={activeMenu === "cart" ? "active" : ""} onClick={() => setActiveMenu("cart")}>
                <img src={assets.basket_icon} alt="Cart Icon" />
              </Link>
              {
                (Object.keys(cartItems).length > 0) && (
                  <div className="dot"></div>
                )
              }
            </div>
            {
              (localStorage.getItem("token")) ? (
                <div className="profile">
                  <img className="profile_icon" src={assets.profile_icon} alt="profile icon" />
                  <div className="profile_dropdown">
                    <div className="item logout" onClick={() => {
                        setToken("");
                        localStorage.removeItem("token");
                        toast.success("Logout Successfully.")
                      }}>
                      <div className="icon">
                        <HiOutlineLogout />
                      </div>
                      <span>logout</span>
                    </div>
                    <div className="item order">
                      <div className="icon">
                        <BsCart2 />
                      </div>
                      <span>order</span>
                    </div>
                  </div>
                </div>
              ): (
                <button onClick={() => setIsOpenSignUp(true)}>Sign in</button>
              )
            }
            
          </div>
          {/* Mobile Side Menu */}
          <div className="side_menu_bar">
            <IoMenu
              onClick={() => {
                setSideMenuClosing(false);
                setIsSideMenuOpen(true);
              }}
            />
            {isSideMenuOpen && (
              <div ref={sideMenuRef}
                className={`side_menu ${sideMenuClosing ? "closed" : "opened"}`}
              >
                <ul className="menu">
                  <li
                    className={activeMenu === "home" ? "active" : ""}
                    onClick={() => {
                      setActiveMenu("home");
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth", // smooth scrolling animation
                      });
                    }}
                  >
                    <Link to="/">home</Link>
                  </li>
                  <li
                    className={activeMenu === "menu" ? "active" : ""}
                  >
                    <a href="#explore_menu">Menu</a>
                  </li>
                  <li
                    className={activeMenu === "mobile-app" ? "active" : ""}
                  >
                    <a href="#download_app">mobile app</a>
                  </li>
                  <li
                    className={activeMenu === "contact-us" ? "active" : ""}
                  >
                    <a href="#footer">contact us</a>
                  </li>
                </ul>
                <div className="menu_right">
                  <div className="search_icon">
                    <img src={assets.search_icon} alt="Search Icon" />
                  </div>
                  <div className="cart_icon_box">
                    <Link className={activeMenu === "cart" ? "active" : ""} onClick={() => setActiveMenu("cart")} to='/cart'>
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
