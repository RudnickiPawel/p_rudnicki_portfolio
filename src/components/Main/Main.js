import { Fragment } from "react";
import Section from './Section/Section';
import ProjectCard from './Section/ProjectCard/ProjectCard';

//contains the code, so App.js doesnt have to
const Main = (props) => {
  return (
    //todo: check if all uppercase looks better
    <Fragment>
      <Section id='projects' className='Card'>
        <h1 className='Section__title'>Projekty</h1>
        <ProjectCard
          url='/1'
          img='placeholder600.png'
          title='Sklep internetowy'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sagittis sapien varius interdum. Nulla sodales turpis vel diam.'
        />
        <ProjectCard
          url='/2'
          img='placeholder600.png'
          title='Forum'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sagittis sapien varius interdum. Nulla sodales turpis vel diam.'
        />
        <ProjectCard
          url='/3'
          img='placeholder600.png'
          title='Fotograf'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sagittis sapien varius interdum. Nulla sodales turpis vel diam.'
        />
      </Section>
      {/* <Section id='skills'>
        <h1 className='Section__title'>Umiejętności</h1>
      </Section>
      <Section id='about'>
        <h1 className='Section__title'>O mnie</h1>
      </Section>
      <Section id='contact'>
        <h1 className='Section__title'>Kontakt</h1>
      </Section> */}
    </Fragment>
  );
};

export default Main;