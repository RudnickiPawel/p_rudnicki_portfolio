import { Fragment } from "react";
import Section from './Section/Section';
import ProjectCard from './Section/ProjectCard/ProjectCard';
import Arrow from './Arrow/Arrow';
import '../../styles/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faNpm, faReact, faGit, faNode, faSass } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from 'react';
import kreatywnaIMG from '../../assets/kreatywnapizza.png';
import photographyIMG from '../../assets/photographer-website.png';

const Main = (props) => {
  useEffect(() => {
    let selectedFlyingText = '';
    const watchingIt = document.getElementById('about').children[1];
    var observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        selectedFlyingText = Array.from(document.querySelectorAll('.Section__item--flying'));
        selectedFlyingText.map(text => {
          if(text.classList.contains('Section__item1'))
            text.style.color = 'rgba(248,170,103,255)';
          text.style.left = '0px'
          return null
        });
      }

    }, { threshold: [1] });
    observer.observe(watchingIt);
  }, []);

  return (
    <Fragment>
      <Section id='projects' className='card'>
        <h1 className='Section__title'>Projekty</h1>
        <ProjectCard
          url='/kreatywnapizza'
          img={kreatywnaIMG}
          title='KreatywnaPizza'
          content='Sklep internetowy, za pomocą którego można zamówić pizze. Do wyboru jest ich liczba, rozmiar, a nawet składniki!'
          techs={['react', 'npm', 'useState', 'useEffect', 'prop drilling', 'error boundary', 'updating nested state', 'fontawesome', 'react-select', 'google-map', 'sass', 'firebase', 'hamburger color changes']}
        />
        <ProjectCard
          url='/photography'
          img={photographyIMG}
          title='Portfolio Fotografa'
          content='Strona portfolio fotografa. Zdjęcia są podzielone na różne kategorie i wyświetlone w formie tak zwanej karuzeli.'
          techs={['react', 'npm', 'react-responsive-carousel', 'many images import', 'fontawesome', 'google fonts', 'sass']}
        />
        {/* <ProjectCard
          url='/3'
          img='placeholder600.png'
          title='Fotograf'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sagittis sapien varius interdum. Nulla sodales turpis vel diam.'
        /> */}
        <Arrow targetId='#skills' />
        {/*styling for this icon is in _Section.sass*/}

      </Section>
      <Section id='skills' className='skills'>
        <h1 className='Section__title'>Umiejętności</h1>
        <div className='Section__background'>
          <div className="Section__container">
            <div className="Section__item">
              <FontAwesomeIcon className='icon' icon={faHtml5} />
              <h3>html5</h3>
            </div>
            <div className="Section__item">
              <FontAwesomeIcon className='icon' icon={faCss3} />
              <h3>css3</h3>
            </div>
            <div className="Section__item">
              <FontAwesomeIcon className='icon' icon={faJs} />
              <h3>javascript <br /> es6</h3>
            </div>
            <div className="Section__item">
              <FontAwesomeIcon className='icon' icon={faNpm} />
              <h3>npm</h3>
            </div>
            <div className="Section__item">
              <FontAwesomeIcon className='icon' icon={faReact} />
              <h3>react</h3>
            </div>
            <div className="Section__item">
              <FontAwesomeIcon className='icon' icon={faNode} />
              <h3>node.js</h3>
            </div>
            <div className="Section__item">
              <FontAwesomeIcon className='icon' icon={faGit} />
              <h3>git</h3>
            </div>
            <div className="Section__item">
              <FontAwesomeIcon className='icon' icon={faSass} />
              <h3>sass</h3>
            </div>
          </div>
        </div>
        <Arrow targetId='#about' version='black' />
      </Section>
      <Section id='about' className='about'>
        <h1 className='Section__title'>O mnie</h1>
        <div className='Section__container'>
          <div className='Section__item--flying Section__item1'>Cześć!</div>
          <div className='Section__item--flying Section__item2'>jestem Paweł</div>
          <div className='Section__item--flying Section__item3'>nauczony z internetowych źródeł</div>
          <div className='Section__item--flying Section__item3'>teraz skupiam się na React, Redux i Next</div>
          <div className='Section__item--flying Section__item4'>Do zobaczenia!</div>
        </div>
        <Arrow targetId='#contact' version='black' />
      </Section>
    </Fragment>
  );
};

export default Main;