import React from 'react';

import { AboutUs, ContactUs, Home, OurServices } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Home />
    <AboutUs />
    <OurServices />
    <ContactUs />
  </div>
);

export default App;
