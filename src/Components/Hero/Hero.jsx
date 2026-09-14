import { Skeleton } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import hero_img from '../../assets/profile.png';
import './Hero.css';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className='hero' id='home'>
  

      {/* Hero text */}
      <h1>
        <span className='fixed'>Hi , I'm Mohammed Elalimy | </span><br/>
        <ReactTyped
          className="typed"
          strings={[" Frontend Developer","MERN Stack Developer", "React Developer"]}
          typeSpeed={200}
          backSpeed={100}
          showCursor={true}
          loop
        />
      </h1>

      <p>Eager to learn new technologies and contribute to real-world projects.</p>

      <div className="hero-action">
        <Link className='hero-connect' offset={50} to='/contact'>
          Contact with me
        </Link>

        <a
          href="/CV.pdf"
          download="cv.pdf"
          className="hero-resume"
        >
          My Resume
        </a>
      </div>
    </div>
  );
}

export default Hero;
