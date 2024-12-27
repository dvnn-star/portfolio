import React, { useEffect } from 'react';
import { Routes,Route,useLocation } from "react-router-dom"
import Navbar from "./components/Change"
import Apps from "./Links"
import Aos from "aos"
import 'aos/dist/aos.css';
import Page2 from './components/Page2';
import { AnimatePresence } from "framer-motion"
 function App(){
   useEffect(() => {
      Aos.init(); // AOS initialization
    }, []);
const location = useLocation();
  return (
  <div>

    <Navbar/>
    <AnimatePresence mode="wait">

  <Routes location={location} key={location.pathname}>
      <Route index element={<Apps/>}/>
      <Route path="/Page2"element={<Page2/>}/>
      
  </Routes>
    </AnimatePresence>

    
</div>
)
}
export  default App