import { Fragment } from "react";
import Section from './Section/Section';
import ProjectCard from './Section/ProjectCard/ProjectCard';
import Arrow from './Arrow/Arrow';
import '../../styles/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faNpm, faReact, faGit, faNode, faSass } from "@fortawesome/free-brands-svg-icons";
import kreatywnaIMG from '../../assets/kreatywnapizza.png';
import photographyIMG from '../../assets/photographer-website.png';
import thisPage from '../../assets/front-portfolio.png';

const Main = (props) => {
  return (
    <Fragment>
      <Section id='projects' className='card'>
        <div className="Section__container">
          <div className="Section__title-wrapper">
            <h1 className='Section__title'>Projekty</h1>
          </div>
        </div>
        <ProjectCard
          url='/'
          img={thisPage}
          title='Portfolio Frontend Developera'
          content='Moja strona portfolio, na której umieszczam wykonane projekty i poznane dotychczas technologie.'
          techs={['react', 'npm', 'useEffect', 'fontawesome', 'sass', 'aos']}
          github='https://github.com/RudnickiPawel/p_rudnicki_portfolio'
        />
        <ProjectCard
          url='/kreatywnapizza'
          img={kreatywnaIMG}
          title='KreatywnaPizza'
          content='Sklep internetowy, za pomocą którego można zamówić pizze. Do wyboru jest ich liczba, rozmiar, a nawet składniki!'
          techs={['react', 'npm', 'useState', 'useEffect', 'prop drilling', 'error boundary', 'updating nested state', 'fontawesome', 'react-select', 'google-map', 'sass', 'firebase']}
          github='https://github.com/RudnickiPawel/kreatywna_pizza'
        />
        <ProjectCard
          url='/photography'
          img={photographyIMG}
          title='Portfolio Fotografa'
          content='Strona portfolio fotografa. Zdjęcia są podzielone na różne kategorie i wyświetlone w formie tak zwanej karuzeli.'
          techs={['react', 'npm', 'react-responsive-carousel', 'many images import', 'fontawesome', 'google fonts', 'sass']}
          github='https://github.com/RudnickiPawel/photographer-website'
        />
        <Arrow targetId='#skills' />
        {/*styling of this icon is in _Section.sass*/}

      </Section>
      <Section id='skills' className='skills'>
        <div className="Section__title-wrapper Section__title-wrapper--bg-dark">
          <h1 className='Section__title'>Umiejętności</h1>
        </div>
        <div className="Section__container">
          <div data-aos="zoom-in" className="Section__item">
            <FontAwesomeIcon className='icon' icon={faHtml5} />
            <h3>html5</h3>
          </div>
          <div data-aos="zoom-in" className="Section__item">
            <FontAwesomeIcon className='icon' icon={faCss3} />
            <h3>css3</h3>
          </div>
          <div data-aos="zoom-in" className="Section__item">
            <FontAwesomeIcon className='icon' icon={faJs} />
            <h3>javascript es6</h3>
          </div>
          <div data-aos="zoom-in" className="Section__item">
            <FontAwesomeIcon className='icon' icon={faNpm} />
            <h3>npm</h3>
          </div>
          <div data-aos="zoom-in" className="Section__item">
            <FontAwesomeIcon className='icon' icon={faReact} />
            <h3>react</h3>
          </div>
          <div data-aos="zoom-in" className="Section__item">
            <FontAwesomeIcon className='icon' icon={faNode} />
            <h3>node.js</h3>
          </div>
          <div data-aos="zoom-in" className="Section__item">
            <FontAwesomeIcon className='icon' icon={faGit} />
            <h3>git</h3>
          </div>
          <div data-aos="zoom-in" className="Section__item">
            <FontAwesomeIcon className='icon' icon={faSass} />
            <h3>sass</h3>
          </div>
        </div>
        <Arrow targetId='#about' />
      </Section>
      <Section id='about' className='about'>
        <div className="Section__title-wrapper Section__title-wrapper--bg-dark">
          <h1 className='Section__title'>O mnie</h1>
        </div>
        <div className='Section__container'>
          <div className='Section__item' data-aos="zoom-in">Interesuję się web developmentem. Chcę być zawsze na czasie, ale też uczę się starszych technologii, które nadal są bardzo popularne przy pracy z React.</div>
          <div className='Section__item' data-aos="zoom-in">W tym momecie uczę się Redux, Next.js i TypeScript oraz interesuję się NestJS, Gatsby i React 18.</div>
          <div className='Section__item --nomargin' data-aos="zoom-in">Tworząc aplikacje skupiam się na:</div>
          <ul className='Section__container--about --nomargin' style={{ 'list-style-type': 'none' }} data-aos="zoom-in">
            <li className='Section__item'>responsywności(RWD, mobile first)</li>
            <li className='Section__item'>czytelności kodu(BEM methodology)</li>
            <li className='Section__item'>szybkości pisania kodu(components, emmet)</li>
            <li className='Section__item'>działaniu w różnych przeglądarkach(browser coverage)</li>
            <li className='Section__item'>optymalizacji dla wyszukiwarek(SEO)</li>
          </ul>
        </div>
        <Arrow targetId='#contact' />
      </Section>
    </Fragment>
  );
};

export default Main;