import './styles/_App.sass';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import ProjectCard from './components/Section/ProjectCard/ProjectCard';

function App() {
  return (
    <div className='App'>
      <Header />
      <Section className='Card'>
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
      <Section></Section>
      <Section></Section>
      <Section></Section>
    </div>
  );
}

export default App;
