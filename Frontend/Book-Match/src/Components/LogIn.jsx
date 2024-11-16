import React from 'react';
import "./Login.css";
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
        <div className="background">
      <div className="container">
        <div className="LoginBox">
          <div className="login-container">
            <h1>Welcome Back</h1>
            <h4>Please enter your details</h4>
          </div>

          <div className="detail-container">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form__field"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <label htmlFor="username" className="form__label">
                  Username
                </label>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form__field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="password" className="form__label">
                  Password
                </label>
              </div>
              <button type="button" onClick={handleLogin}>
                Log In
              </button>
            </form>
            <div className="loginMessage">
            {message && <p className="error-message">{message}</p>}
            </div>
          </div>
        </div>
        <div className="logo">
          <img src={MatchLogo} alt="BookMatch Logo" />
        </div>
      </div>
    </div>
        </>
    );  
};

export default LogIn;