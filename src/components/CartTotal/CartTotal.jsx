import React, { useContext } from "react";
import "./CartTotal.css";
import { Link } from "react-router-dom";
import { storeContext } from "../../context/storeContext";

const CartTotal = () => {
    const {total} = useContext(storeContext);
    return (
        <div className="cart_total_main">
            <h2>Cart Total</h2>
            <div className="subTotal">
                <span>Subtotal</span>
                <span>${total}</span>
            </div>
            <div className="delivery_free">
                <span>Delivery free</span>
                <span>${ total > 0 ? "2" : "0"}</span>
            </div>
            <div className="total">
                <span>total</span>
                <span>${ total > 0 ? (total + 2) : "0"}</span>
            </div>
            <Link className="checkout_btn">proceed to checkout</Link>
        </div>
    );
};

export default CartTotal;
