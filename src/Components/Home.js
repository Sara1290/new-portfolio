import React from 'react';
import {Link} from 'react-router-dom';
import AboutMe from './AboutMe';

const Home = () => {

return (
  <div className='home-outer tulip-background'>
    <div className='translucent-overlay flex-row-evenly'>
      <h1>Sara Reed</h1>
      <div className='flex-row-space-evenly color-boxes'>
      <Link to="/about-me">
        <span className='blue box'>About Me</span>
      </Link>  
        
        <span className='pink box'>Projects</span>
        <span className='purple box'>Resume</span>
        <span className='yellow box'>Contact</span>
      </div>
    </div>
  </div>
)

}
export default Home;