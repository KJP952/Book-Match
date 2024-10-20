import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import './App.css'
import BookShelf from './Components/Bookshelf'

function App() {

  return (
    // <Router>
    //   {/* <div className="App">
    //     <Route path="/" element={<Home/>} />
    //   </div>
    // </Router> */}s
    <div>
      <Navbar />
        <main>
          <BookShelf />
        </main>
    </div>
  );
}

export default App;