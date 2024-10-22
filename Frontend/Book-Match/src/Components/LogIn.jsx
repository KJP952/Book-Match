import React from 'react';
import "./Login.css";

const LogIn = () => {
    return (
        // <div>
        //     <h1>Log In Page</h1>
        //     <p>This is the page content</p>
        // </div>

        <>
            <div className="LoginBox">
                <h3>Welcome Back</h3>
                <h4>Please enter your details</h4>

                <form>
                    <label for="eadress">Email Adress</label>
                    <input type="text" id="eadress" name="eadress" />
                    <label for="pword">Password</label>
                    <input type="text" id="pword" name="pword" />
                </form>
            </div>
            
            <div className="logo">
            </div></>
    );  
};

export default LogIn;