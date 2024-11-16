import React from 'react';
// import "./Login.css";
import MatchLogo from "./Logo/BookMatch.png";
import { useState } from 'react';

const LogIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
    try {
        const response = await fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('Login successful:', data);
          setMessage('Login successful!');
  
          // Store the JWT token in localStorage or cookies
        //   localStorage.setItem('token', data.token);
  
          // Redirect or perform post-login actions
          window.location.href = "/"; // Example redirection
        } else {
          const error = await response.json();
          console.error('Login failed:', error);
          setMessage(error.message || 'Login failed. Please check your credentials.');
        }
      } catch (error) {
        console.error('Network Error:', error);
        setMessage('An error occurred. Please try again.');
      }
    };

    return (
        <> 
        <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Log In</button>
      {message && <p>{message}</p>}
    </div>

        {/* <div className ="background">
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
                    <button type="button">Log In</button>
                    </div>
                </div>
                    <div className="logo">
                        <img src={MatchLogo} alt="BookMatch Logo" />
                    </div>
            </div>
        </div> */}
        </>
    );  
};

export default LogIn;