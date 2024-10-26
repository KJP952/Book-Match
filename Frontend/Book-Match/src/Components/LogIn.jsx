import React from 'react';
import "./Login.css";
import MatchLogo from "./Logo/BookMatch.png";

const LogIn = () => {
    return (
        <> 
        <div className ="background">
            <div className = "container">
                <div className="LoginBox">
                    <div className="login-container">
                        <h1>Welcome Back</h1>
                        <h4>Please enter your details</h4>
                    </div>

                    <div className="detail-container">
                    <form>
                        <div className="form-group">
                            <input type="text" id="eadress" name="eadress" className="form__field" required />
                            <label htmlFor="eadress" className="form__label">Email Address</label>
                        </div>
                        <div className="form-group">
                            <input type="password" id="pword" name="pword" className="form__field" required />
                            <label htmlFor="pword" className="form__label">Password</label>
                        </div>
                    </form>
                    <button type="button" class="login-button">Log In</button>
                    </div>
                </div>
                    <div className="logo">
                        <img src={MatchLogo} alt="BookMatch Logo" />
                    </div>
            </div>
        </div></>
    );  
};

export default LogIn;