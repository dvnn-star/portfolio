// Apps.jsx
import React, { useEffect } from 'react';

import 'aos/dist/aos.css';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Profile from './components/Profile';
import Main from './components/Main';
import Navigasi from './components/Navigation';
import transition from './components/transition';

function Apps() {


  return (
    <div>
      <Header />
      <Main />
      <Portfolio />
      <Profile />
      <Navigasi />
    </div>
  );
}

export default transition(Apps);  // Test if Fast Refresh works without transition
