import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Available for Software Engineering Opportunities
        </div>

        <h1 className="hero-title">
          Hi, I'm{' '}
          <span className="hero-name">
            Mohammed Elalimy
          </span>
        </h1>

        <div className="hero-role">
          <ReactTyped
            strings={[
              'Software Engineer',
              'Full-Stack MERN Developer',
              'React & Next.js Developer'
            ]}
            typeSpeed={65}
            backSpeed={35}
            backDelay={1400}
            loop
            showCursor
            cursorChar="|"
          />
        </div>

        <p className="hero-description">
          I build scalable, responsive, and user-focused web applications
          using modern JavaScript technologies, with experience across
          frontend, backend, APIs, and production e-commerce platforms.
        </p>

        <div className="hero-tech">
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
            Let's Connect
            <span>→</span>
          </Link>

          <a
            href="/CV.pdf"
            download="Mohammed_Elalimy_CV.pdf"
            className="hero-resume"
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
