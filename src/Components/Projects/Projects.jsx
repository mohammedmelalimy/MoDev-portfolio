import { useState } from 'react';
import arrow from '../../assets/arrow.svg';
import theme from '../../assets/theme.svg';
import ProjectsDetails from '../../Data/projects.js';
import Card from './Card';
import './Projects.css';
const Projects = () => {
  const [activeIndex, setActiveIndex] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = activeIndex === 'all'
    ? ProjectsDetails
    : ProjectsDetails.filter(project => project.category === activeIndex);

  // Projects to show (first 3 unless showAll true)
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <div className='projects-section' id='projects'>
      <div className="title">
        <h1>My Latest Work</h1>
        <img src={theme} alt='theme'/>
      </div>
      <div className='projects-container'>
        <div className="side">
          <button 
              className={activeIndex === 'all' ? 'active' : ''} 
              onClick={() => {setActiveIndex('all'); setShowAll(false);}}
          >
              All Projects
          </button>
          <button 
              className={activeIndex === 'html-css' ? 'active' : ''} 
              onClick={() => {setActiveIndex('html-css'); setShowAll(false);}}
          >
            Html & CSS
          </button>
          <button 
              className={activeIndex === 'js' ? 'active' : ''} 
              onClick={() => {setActiveIndex('js'); setShowAll(false);}}
          >
              JavaScript
          </button>
          <button 
              className={activeIndex === 'react' ? 'active' : ''} 
              onClick={() => {setActiveIndex('react'); setShowAll(false);}}
          >
              React Js
          </button>
        </div>

        <div className="projects-card">
          {displayedProjects.map((project) => (
            <Card key={project.id} {...project} />
          ))}
        </div>
      </div>
        {filteredProjects.length > 3 && (
          <button 
            className="show-more-projects"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'Show More'}
            <img src={arrow}/>
          </button>
        )}
    </div>
  );
};

export default Projects;
