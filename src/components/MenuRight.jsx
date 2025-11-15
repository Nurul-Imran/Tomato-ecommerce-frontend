import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { HiOutlineLogout } from "react-icons/hi";
import { BsCart2 } from "react-icons/bs";
import { toast } from "react-toastify";

const MenuRight = ({activeMenu, setActiveMenu, cartItems, setToken, setIsOpenSignUp}) => {
  return (
    <div className="menu_right">
      <div className="search_icon">
        <img src={assets.search_icon} alt="Search Icon" />
      </div>
      <div className="cart_icon_box">
        <Link
          to="/cart"
          className={activeMenu === "cart" ? "active" : ""}
          onClick={() => setActiveMenu("cart")}
        >
          <img src={assets.basket_icon} alt="Cart Icon" />
        </Link>
        {Object.keys(cartItems).length > 0 && <div className="dot"></div>}
      </div>
      {localStorage.getItem("token") ? (
        <div className="profile">
          <img
            className="profile_icon"
            src={assets.profile_icon}
            alt="profile icon"
          />
          <div className="profile_dropdown">
            <div
              className="item logout"
              onClick={() => {
                setToken("");
                localStorage.removeItem("token");
                toast.success("Logout Successfully.");
              }}
            >
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
      ) : (
        <button onClick={() => setIsOpenSignUp(true)}>Sign in</button>
      )}
    </div>
  );
};

export default MenuRight;
