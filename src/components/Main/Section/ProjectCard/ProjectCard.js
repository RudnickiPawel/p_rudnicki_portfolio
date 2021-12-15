import '../../../../styles/main.css';

const ProjectCard = (props) => {
  return (
    <div data-aos='zoom-in' className='ProjectCard__wrapper'>
      <div className='ProjectCard'>
        <div className='ProjectCard__side ProjectCard__front'>
          <h1>{props.title}</h1>
          <img src={props.img} alt='' />
          <h2>{props.content}</h2>
        </div>
        <div href={props.url} className='ProjectCard__side ProjectCard__back'>
          <h1>Użyto:</h1>
          {props.techs.map((tech, index) =>
            <p key={index}>{tech}</p>
          )}
        </div>
      </div>
      <div className="ProjectCard__btns-wrapper">
        <a className='ProjectCard__button' href={props.url}>Strona</a>
        <a className='ProjectCard__button' href={props.github}>Kod</a>
      </div>
    </div>
  );
};

export default ProjectCard;