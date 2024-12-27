import React from 'react';
import transition from "./transition";
import Achievement from './Achievement';
import Input from './Input';
import Navbar from './Change';
const Page2 = () => {
    return (
       
       <div className='background'>
       <Achievement/>
<Input/>
<Navbar/>
       </div>
      
    );
};

export default transition(Page2);