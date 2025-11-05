import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";

import './signup.css'

const Signup = ({setIsOpenSignUp}) => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div id='signup'>
            <div className="signup_content">
                <div className="form_heading">
                    <h3>{isLogin ? "Login" : "Sign up" }</h3>
                    <RxCross1 onClick={() => setIsOpenSignUp(false)} className='cross_icon' />
                </div>
                <form className='form' action="/" method="post">
                    {!isLogin && (
                        <input type="text" placeholder='Your Name' required name='username' />
                    )}

                    <input type="email" placeholder='Your Email' required name='username' />

                    <input type="password" placeholder='Password' required name='username' />
                    <button>{isLogin ? "Login" : "Create account"}</button>
                    <div className="privacy_policy">
                        <input type="checkbox" required />
                        <p>By continuing, i agree to the terms of use & privacy policy</p>
                    </div>
                </form>
                <div className="form_footer">
                    <p>{isLogin ? "Create a new account?" : "Already have an account?"} <span onClick={() => setIsLogin(prev => !prev)}>Click here</span></p>
                </div>
            </div>
        </div>
    )
}

export default Signup