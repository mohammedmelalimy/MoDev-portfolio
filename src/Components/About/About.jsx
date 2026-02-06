import { FaBootstrap, FaCss3Alt, FaHtml5, FaJsSquare, FaNode, FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiNestjs, SiNextdotjs, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si';
import left from "../../assets/Hero.png";
import theme from '../../assets/theme.svg';
import './About.css';

const About = () => {
    return (
        <div className="about" id="about">
            <div className="title-box">
                <h1>About Me</h1>
                <img src={theme} alt="title underline" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={left} alt="profile" />
                </div>

                <div className="about-right">
                    <div className="about-para">
                        <p>
                            I'm a <span>Frontend Developer</span> with a strong focus on building modern, responsive, 
                            and user-friendly web applications.  
                            I enjoy turning ideas into real products and constantly improving my 
                            skills through hands-on projects and continuous learning.  
                            I'm passionate about writing clean code, exploring new technologies, 
                            and contributing to meaningful projects .   
                            <span> Here are the main tools and technologies I work with :</span>
                        </p>
                    </div>

                    <div className="skills-part">
                        <div className="skill"><FaHtml5 size={40} /><span>HTML</span></div>
                        <div className="skill"><FaCss3Alt size={40} /><span>CSS</span></div>
                        <div className="skill"><FaJsSquare size={40} /><span>JavaScript</span></div>
                        <div className="skill"><FaReact size={40} /><span>React</span></div>
                        <div className="skill"><FaNode size={40} /><span>Node.js</span></div>
                        <div className="skill"><SiExpress size={40} /><span>Express.js</span></div>
                        <div className="skill"><SiMongodb size={40} /><span>MongoDB</span></div>
                        <div className="skill"><FaBootstrap size={40} /><span>Bootstrap</span></div>
                        <div className="skill"><SiTailwindcss size={40} /><span>Tailwind</span></div>
                        <div className="skill"><SiRedux size={40} /><span>Redux</span></div>
                        <div className="skill"><SiNextdotjs size={40} /><span>Next Js</span></div>
                        <div className="skill"><SiTypescript size={40} /><span>TypeScript</span></div>
                        <div className="skill"><SiNestjs size={40} /><span>Nest Js</span></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;
