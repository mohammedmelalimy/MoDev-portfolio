import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ReactTyped } from 'react-typed';
import hero_img from '../../assets/profile.png';
import './Hero.css';
const Hero = () => {
    return (
        <div>
            <div className='hero' id='home'>
                <img src={hero_img} alt='profile image' className='img-hero'/>
                <h1>
                  <span className='fixed'>Hi , I'm Mohammed Elalimy | </span><br/>
                  <ReactTyped
                    className="typed"
                    strings={[" Frontend Developer","MERN Stack Developer", "React Developer"]}
                    typeSpeed={200}
                    backSpeed={100}
                    showCursor={true}
                    startWhenVisible
                    // loop
                  />
                </h1>
                <p>Eager to learn new technologies and contribute to real-world projects. </p>
                <div className="hero-action">
                    <AnchorLink className='hero-connect' offset={50} href='#contact'>
                        Contact with me
                    </AnchorLink>
                    <a
                        href="/public/cv.pdf"
                        download="cv.pdf"
                        className="hero-resume"
                        >My Resume</a>
                </div>
            </div>
        </div>
    )
    }

export default Hero