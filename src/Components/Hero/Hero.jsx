import AnchorLink from 'react-anchor-link-smooth-scroll';
import {ReactTyped} from 'react-typed';
import hero_img from '../../assets/profile.png';
import './Hero.css';
import { Skeleton } from '@mui/material';
import { useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className='hero' id='home'>
      {/* Hero image */}
      <img 
        src={hero_img} 
        alt='profile image' 
        className='img-hero' 
        style={{ display: isLoaded ? 'block' : 'none' }}
        onLoad={() => setIsLoaded(true)}
      />

      {/* Skeleton shows only while image is loading */}
      {!isLoaded && <Skeleton variant="rectangular" width={210} height={118} />}

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
        <AnchorLink className='hero-connect' offset={50} href='#contact'>
          Contact with me
        </AnchorLink>

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
