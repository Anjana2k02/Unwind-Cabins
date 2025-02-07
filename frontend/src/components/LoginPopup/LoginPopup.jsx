import React, { useState } from 'react';
import './LoginPopup.css';
import cross_icon from '../../assets/cross_icon.png';


const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Sign Up");
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const apiUrl = currState === "Sign Up" ? "/api/signup" : "/api/login";
        const payload = currState === "Sign Up"
            ? formData
            : { email: formData.email, password: formData.password };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await response.json();
            if (response.ok) {
                alert(data.message);
                if (currState === "Login") {
                    localStorage.setItem("token", data.token); // Store JWT token
                    setShowLogin(false);
                }
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className='login-popup'>
            <form className="login-popup-container" onSubmit={handleSubmit}>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={cross_icon} alt='Close' />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Sign Up" && (
                        <input type="text" name="username" placeholder="Username" required value={formData.username} onChange={handleChange} />
                    )}
                    <input type="email" name="email" placeholder="E-mail" required value={formData.email} onChange={handleChange} />
                    <input type="password" name="password" placeholder="Password" required value={formData.password} onChange={handleChange} />
                    {currState === "Sign Up" && (
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" required value={formData.confirmPassword} onChange={handleChange} />
                    )}
                </div>
                <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type='checkbox'  />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currState === "Login"
                    ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                }
            </form>
        </div>
    );
};

export default LoginPopup;
