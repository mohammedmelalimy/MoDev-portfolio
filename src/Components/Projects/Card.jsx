import './Card.css';
const Card = ({ img, name, description, tools, githubLink, liveLink }) => {
  return (
    <div className='project-card'>
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="tools">
        {tools.map((tool, index) => (
          <span key={index}>{tool}</span>
        ))}
      </div>
      <div className="links">
        {githubLink && (
          <a href={githubLink} target='_blank' rel='noreferrer'>
            <i className="fa-brands fa-github"></i> GitHub
          </a>
        )}
        {liveLink && (
          <a href={liveLink} target='_blank' rel='noreferrer'>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
