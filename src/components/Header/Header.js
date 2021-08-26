import '../../styles/main.css';
import Hamburger from './Hamburger/Hamburger';
import Menu from './Menu/Menu';
import { useState } from 'react';

const Header = (props) => {
  const [toggleMenu, setToggleMenu] = useState(1);
  const toggleMenuHandler = () => {
    setToggleMenu(prevToggleMenu => !prevToggleMenu)
  };
  return (
    <div className={toggleMenu ? 'Header' : 'Header Header--backgroundOff'}  >
      <Hamburger clicked={toggleMenuHandler} isMenuOn={toggleMenu}/>
      {toggleMenu ? <Menu /> : null}
    </div>
  );
};

export default Header;