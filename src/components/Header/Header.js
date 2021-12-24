import '../../styles/main.css';
import Hamburger from './Hamburger/Hamburger';
import Menu from './Menu/Menu';
import { useState } from 'react';

const Header = (props) => {
  const isScreenWide = window.innerWidth > 768;
  // initially show menu on big width, and hide on small
  const [toggleMenu, setToggleMenu] = useState(isScreenWide ? 1 : 0);
  const handleToggleMenu = () => {
    setToggleMenu(prevToggleMenu => !prevToggleMenu);
  };

  return (
    <div className='Header'>
      <div className='Header__container'>
        <div className='Header__logo'>
          <div className='Section__title-wrapper'>
            <div>PAWEŁ RUDNICKI</div>
          </div>
          <span>Front-end Developer</span>
        </div>
        <Hamburger clicked={handleToggleMenu} isMenuOn={toggleMenu} />
        {toggleMenu ? <Menu /> : <Menu className='Menu__hidden' />}
      </div>
    </div>
  );
};

export default Header;