import '../../styles/main.css';
import Hamburger from './Hamburger/Hamburger';
import Menu from './Menu/Menu';
import { useState } from 'react';

const Header = (props) => {
  const isScreenWide = window.innerWidth > 768; 
  // initially show menu on big width, and hide on small
  const [toggleMenu, setToggleMenu] = useState(isScreenWide ? 1 : 0);
  const toggleMenuHandler = () => {
    setToggleMenu(prevToggleMenu => !prevToggleMenu)
  };
  return (
    <div className='Header'>
      <Hamburger clicked={toggleMenuHandler} isMenuOn={toggleMenu}/>
      {toggleMenu ? <Menu /> : null}
    </div>
  );
};

export default Header;