import React from 'react'
import './Hero.css'
import hero_img from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
    return (
        <div>
            <div className='hero' id='home'>
                <img src={hero_img} alt='profile image' className='img-hero'/>
                <h1> <span>I'm Mohamed Elalimy | </span>Frontend Developer based in Tanta</h1>
                <p>Eager to learn new technologies and contribute to real-world projects. </p>
                <div className="hero-action">
                    <div className="hero-connect">
                        <AnchorLink className='anchor-link' offset={50} href='#contact'>
                            Contact with me
                        </AnchorLink>
                    </div>
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
