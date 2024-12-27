import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Navbar from './components/Change.jsx'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Router>
      
      <Routes>
        <Route path='/*' element={<App/>}/>
      </Routes>
    </Router>
    
 
  </StrictMode>,
)
