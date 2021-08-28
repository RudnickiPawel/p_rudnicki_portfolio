import '../../../../styles/main.css';
import placeholder from '../../../../assets/placeholder600.png';

const ProjectCard = (props) => {
  return (
    <div className='ProjectCard'>
      <div className='ProjectCard__side ProjectCard__front'>
        <img src={placeholder} alt="placeholder" />
        <h1>{props.title}</h1>
        <h2>{props.content}</h2>
      </div>
      <a href={props.url} className='ProjectCard__side ProjectCard__back'>
        <p>This is back</p>
      </a>
    </div>
  );
};

export default ProjectCard;