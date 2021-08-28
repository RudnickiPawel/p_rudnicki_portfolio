import '../../../styles/main.css';
import placeholder from '../../../assets/placeholder600.png';
// import IMG from 

const ProjectCard = (props) => {
  return (
    <a href={props.url} className='ProjectCard'>
      <img src={placeholder} alt="placeholder" />
      <h1>{props.title}</h1>
      <h2>{props.content}</h2>
    </a>
  );
};

export default ProjectCard;