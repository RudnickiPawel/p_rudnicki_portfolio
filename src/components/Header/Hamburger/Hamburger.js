import '../../../styles/main.css';

const Hamburger = (props) => {
  return (
    <div className= {props.isMenuOn ? 'Hamburger Hamburger-x' : 'Hamburger'} onClick={props.clicked}>
      {/* basically if menu is visible, then, depending on resolution, 
      hamburger shape changes to 'X', or to '>'*/}
      <div className='Hamburger__line1'></div>
      <div className='Hamburger__line2'></div>
      <div className='Hamburger__line3'></div>
    </div>
  );
};

export default Hamburger;