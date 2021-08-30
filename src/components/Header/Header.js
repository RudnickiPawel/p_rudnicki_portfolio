import '../../styles/main.css';
import Hamburger from './Hamburger/Hamburger';
import Menu from './Menu/Menu';
import { useState, useEffect } from 'react';

const Header = (props) => {
  useEffect(() => {
    handleHamburgerColor();
  }, []);
  const isScreenWide = window.innerWidth > 768;
  // initially show menu on big width, and hide on small
  const [toggleMenu, setToggleMenu] = useState(isScreenWide ? 1 : 0);
  const handleToggleMenu = () => {
    setToggleMenu(prevToggleMenu => !prevToggleMenu);
  };
  const handleHamburgerColor = () => {
    const hamburgerLinesList = document.getElementsByClassName('Hamburger')[0].childNodes;
    window.addEventListener('scroll', () => {
      const hamburgerLinesArray = Array.from(hamburgerLinesList);
      if (window.pageYOffset > 1537)
        hamburgerLinesArray.map(line => line.style.backgroundColor = 'rgb(0,0,0)');
      else
        hamburgerLinesArray.map(line => line.style.backgroundColor = 'rgb(255,255,255)');
      if (window.innerWidth < 628) {
        if (window.pageYOffset > 2161)
          hamburgerLinesArray.map(line => line.style.backgroundColor = 'rgb(0,0,0)');
        else
          hamburgerLinesArray.map(line => line.style.backgroundColor = 'rgb(255,255,255)');
      }
      // adjust breakpoints later
      // console.log('offset: ' + window.pageYOffset + ', width' + window.innerWidth);
    });
  };

  return (
    <div className='Header'>
      <div className='Header__container'>
        <div className='Header__logo'>PAWEŁ RUDNICKI<span>Front-end Developer</span></div>
        <Hamburger clicked={handleToggleMenu} isMenuOn={toggleMenu} />
        {toggleMenu ? <Menu /> : <Menu className='Menu__hidden' />}
      </div>
    </div>
  );
};

export default Header;