import React from 'react';
import {Route, Routes } from 'react-router-dom';

import AboutMe from './Components/AboutMe';
import DisplayAll from './Components/DisplayAll';
import Home from './Components/Home';

export default (
  <Routes>
    <Route exact path="/" element={<DisplayAll/>} />
    <Route path="about-me" element={<AboutMe />} />
  </Routes>
)