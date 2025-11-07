import React from 'react';

import './PlaceOrder.css';
import CartTotal from '../../components/CartTotal/CartTotal';

const PlaceOrder = () => {
    return (
        <section id='placeOrder'>
            <div className="container">
               <div className="placeOrder_wrapper">
                    <div className="delivery_information">
                        <h2>Delivery Information</h2>
                        <form className='delivery_form' action="#" method="post">
                            <div className="input_group">
                                <input type="text" name='firstName' placeholder='First name' required />
                                <input type="text" name='lastName' placeholder='Last name' required />
                            </div>
                            <input type="email" name='email' placeholder='Enter Email Address' required />
                            <input type="text" placeholder='Street' name='street' required />
                            <div className="input_group">
                                <input type="text" name='city' placeholder='City' required />
                                <input type="text" name='state' placeholder='state' required />
                            </div>
                            <div className="input_group">
                                <input type="text" name='zip-code' placeholder='Zip code' required />
                                <input type="text" name='country' placeholder='Country' required />
                            </div>
                            <input type="text" name='number' placeholder='Number' required />
                        </form>
                    </div>
                    <CartTotal btnText="proceed to payment"  nevigateUrl="#" />
               </div>
            </div>
        </section>
    )
}

export default PlaceOrder