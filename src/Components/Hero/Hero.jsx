import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';

import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <h1>
          <span className="fixed">
            Hi, I'm Mohammed Elalimy
          </span>

          <span className="hero-role">
            <ReactTyped
              className="typed"
              strings={[
                'Software Engineer',
                'Full-Stack MERN Developer',
                'React & Next.js Developer',
              ]}
              typeSpeed={70}
              backSpeed={40}
              backDelay={1300}
              showCursor
              loop
            />
          </span>
        </h1>

        <p>
          Building scalable, responsive, and user-focused web applications
          using modern JavaScript technologies.
        </p>

        <div className="hero-stack">
          <span>React</span>
          <span>Next.js</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>TypeScript</span>
        </div>

        <div className="hero-action">
          <Link
            className="hero-connect"
            to="/contact"
          >
            Contact Me
          </Link>

          <a
            href="/CV.pdf"
            download="Mohammed_Elalimy_CV.pdf"
            className="hero-resume"
          >
            My Resume
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
