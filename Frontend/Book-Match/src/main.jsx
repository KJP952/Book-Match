import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Greeting from './Components/Greeting.jsx'
import Button from './Components/Button.jsx'
import BookShelf from './Components/Bookshelf.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>
  </StrictMode>,
)
