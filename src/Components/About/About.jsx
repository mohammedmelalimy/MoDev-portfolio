import React from 'react'
import './About.css'
import theme from '../../assets/theme.svg'
import left from "../../assets/Hero.png"
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNode, FaBootstrap } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiMongodb,SiExpress } from 'react-icons/si';

const About = () => {
    return (
    <div class="about" id='about'>
        <div class="title-box">
            <h1>About me</h1>
            <img src={theme} alt="title underline"/>
        </div>

        <div class="about-sections">
            <div class="about-left">
                <img src={left} alt="profile" />
            </div>

            <div class="about-right">
                <div class="about-para">
                    <p>
                    I'm a <span>passionate Frontend Developer.... </span>driven by continuous learning and growth.
                    I enjoy building modern, user-friendly web experiences and constantly pushing
                    myself to improve my skills. I’m always eager to explore new technologies and
                    grow further in my field.  
                    <span>Here are the tools and technologies I work with :</span>
                    </p>

                    {/* <p>
                        My passion for frontend development is not only reflected in my
                        extensive experience but also in the enthusiasm and dedication I bring
                        to each project.
                    </p> */}
                </div>
                <div className="skills-part">
                    <div className="skill">
                        <FaHtml5 size={80} />
                        <span>HTML</span>
                    </div>
                    <div className="skill">
                        <FaCss3Alt size={80} />
                        <span>CSS</span>
                    </div>
                    <div className="skill">
                        <FaJsSquare size={80} />
                        <span>JavaScript</span>
                    </div>
                    <div className="skill">
                        <FaReact size={80} />
                        <span>React</span>
                    </div>
                    <div className="skill">
                        <FaNode size={80} />
                        <span>Node.js</span>
                    </div>
                    <div className="skill">
                        <SiExpress size={80} />
                        <span>Express.js</span>
                    </div>
                    <div className="skill">
                        <SiMongodb size={80} />
                        <span>MongoDB</span>
                    </div>
                    <div className="skill">
                        <FaBootstrap size={80} />
                        <span>Bootstrap</span>
                    </div>
                    <div className="skill">
                        <SiTailwindcss size={80} />
                        <span>Tailwind</span>
                    </div>
                    <div className="skill">
                        <SiRedux size={80} />
                        <span>Redux</span>
                    </div>
                </div>
            </div>
        </div>

        {/* <div class="about-achievements">
            <div class="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
            </div>

            <hr />

            <div class="about-achievement">
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
            </div>

            <hr />

            <div class="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
            </div>
        </div> */}
    </div>

    )
    }

export default About;
