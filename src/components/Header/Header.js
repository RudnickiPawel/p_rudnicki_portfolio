import '../../styles/main.sass';
import Hamburger from './Hamburger/Hamburger';
import Menu from './Menu/Menu';
import { useState } from 'react';

const Header = (props) => {
  const [toggleMenu, setToggleMenu] = useState(0);
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