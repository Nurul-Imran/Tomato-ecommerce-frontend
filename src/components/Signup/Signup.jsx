import React, { useContext, useEffect, useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { toast } from 'react-toastify';

import './signup.css'
import api from '../../utils/api.js';

const Signup = ({setIsOpenSignUp}) => {
    const [isLogin, setIsLogin] = useState(true);
    const [closing, setClosing] = useState(false);
    const [checked, setChecked] = useState(false);
    const [formData, setFormData] = useState({
        name: "", email: "", password: ""
    })

    // Handle Change
    const handleChange = (e) => {
        setFormData(prev => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    // handleSubmit 
    const handleSubmit = async(e) => {
        e.preventDefault();
        const url = isLogin ? "/auth/login" : "/auth/signup";
        try {
            const res = await api.post(url, formData);

            // store token
            localStorage.setItem("token", res.data.token);

            // toastify message
            toast.success(res.data.message);

            // reset form
            setFormData({name: "", email: "", password: ""})
            setChecked(false);

        } catch (error) {
            isLogin ? (
                toast.error(error.response.data.message)
            ): (
                error.response.data.success ? toast.error(error.response.data.errors[0]) : toast.error(error.response.data.error)
            );
        }
    }

    const handleClose = () => {
        setClosing(true);
        setTimeout(() => setIsOpenSignUp(false), 500)
    }
    
    useEffect(() => {
        if (localStorage.getItem("token")) return handleClose()
    }, [localStorage.getItem("token")]);

    return (
        <div id='signup' className={closing ? "fadeOut" : "fadeIn"}>
            <div className="signup_content">
                <div className="form_heading">
                    <h3>{isLogin ? "Login" : "Sign up" }</h3>
                    <RxCross1 onClick={handleClose} className='cross_icon' />
                </div>
                <form className='form' action="/" method="post" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <input type="text" placeholder='Your Name' required name='name' value={formData.name} onChange={handleChange} />
                    )}

                    <input type="email" placeholder='Your Email' required name='email' value={formData.email} onChange={handleChange} />

                    <input type="password" placeholder='Password' required name='password'  value={formData.password} onChange={handleChange}  />
                    <button type='submit'>{isLogin ? "Login" : "Create account"}</button>
                    <div className="privacy_policy">
                        <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} required />
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