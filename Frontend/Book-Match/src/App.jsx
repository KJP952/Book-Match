import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.css';
import Bookshelf from './Components/Bookshelf';
import About from './Components/About';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';

function App() {

  return (
    <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Bookshelf />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    // <div>
    //   <Navbar />
    //     <main>
    //       <BookShelf />
    //     </main>
    // </div>
  );
}

export default App;