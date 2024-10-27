import React from 'react';
import "./About.css"
import MatchLogo from "./Logo/BookMatch.png";

const About = () => {
    return (
        <div className ="background">
            <div className="about-container">
                    <div className="aboutus-logo">
                        <img src={MatchLogo} alt="BookMatch Logo" />
                    </div>

                    <div className="aboutus-box">
                        <h1>About Us</h1>
                        <p>We are a group of people who love books</p>
                    </div>
            </div>
        </div>
    );
};

export default About;