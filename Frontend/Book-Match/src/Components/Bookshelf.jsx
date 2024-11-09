import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSignInAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import './BookShelf.css';

const BookShelf = () => {
    const navigate = useNavigate();
    return (
        <div className="background">
        <div className="book-shelf">
            <div className="greeting">
                <h1>Welcome to BookMatch</h1>
                <p>Your personalized book recommendation service.</p>
            </div>

            <div className="shelf">
                <div className="book book1"></div>
                <div className="book book3"></div>
                <div className="book book2"></div>
                <div className="book book1"></div>
                <div className="book book2"></div>
                <div className="book"></div>
                <div className="book book2"></div>
                <div className="book book3"></div>
                <div className="book book1"></div>
                <div className="book"></div>
                <div className="book book3"></div>
                <div className="book book1"></div>
                <div className="book book2"></div>
                <div className="book"></div>
            </div>

            <div className="shelf">
            <div className="book"></div>
                <div className="book book2"></div>

                <button className="book sign-up" onClick={() => navigate('/signUp')}>
                Sign up
                <FontAwesomeIcon icon={faUserPlus} />
                </button>

                <div className="book book3"></div>
                

                <div className="book book1"></div>
                
                <button className="book log-in" onClick={() => navigate('/login')}>
                Log in
                <FontAwesomeIcon icon={faSignInAlt} />
                </button>

                <div className="book book2"></div>
                
    

                <div className="book book3"></div>
                 <button className="book about" onClick={() => navigate('/about')}>
                    About
                    <FontAwesomeIcon icon={faInfoCircle} />
                </button>
                <div className="book"></div>
                <div className="book book3"></div>
            </div>

            <div className="shelf">
                <div className="book"></div>
                <div className="book book2"></div>
                <div className="book book1"></div>
                <div className="book book3"></div>
                <div className="book book3"></div>
                <div className="book book2"></div>
                <div className="book"></div>
                <div className="book book1"></div>
                <div className="book book2"></div>
                <div className="book"></div>
                <div className="book"></div>
                <div className="book book1"></div>
                <div className="book"></div>
                <div className="book book3"></div>
            </div>
        </div>
    </div>
    );
};

export default BookShelf;