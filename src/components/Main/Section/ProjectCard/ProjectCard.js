import '../../../../styles/main.css';

const ProjectCard = (props) => {
  return (
    <div className='ProjectCard'>
      <div className='ProjectCard__side ProjectCard__front'>
        <img src={props.img} alt='' />
        <h1>{props.title}</h1>
        <h2>{props.content}</h2>
      </div>
      <a href={props.url} className='ProjectCard__side ProjectCard__back'>
        <h1>Użyto:</h1>
        {props.techs.map((tech, index) => 
        <p key={index}>{tech}</p>
        )}
      </a>
    </div>
  );
};

export default ProjectCard;