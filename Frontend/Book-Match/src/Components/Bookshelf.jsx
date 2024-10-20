import React from 'react';
import './BookShelf.css';

const BookShelf = () => {
    return (
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
                <div className="book"></div>
                <div className="book book1"></div>
                <div className="book book1"></div>
                <div className="book"></div>
                <div className="book book1"></div>
                <div className="book book3"></div>
                <div className="book"></div>
                <div className="book book2"></div>
                <div className="book"></div>
                <div className="book book2"></div>
                <div className="book book3"></div>
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
    );
};

export default BookShelf;