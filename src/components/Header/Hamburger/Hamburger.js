import '../../../styles/main.css';

const Hamburger = (props) => {
  return (
    <div className= {props.isMenuOn ? 'Hamburger Hamburger-x' : 'Hamburger'} onClick={props.clicked}>
      {/* initial state of menu depends on the resolution of users browser*/}
      <div className='Hamburger__line1'></div>
      <div className='Hamburger__line2'></div>
      <div className='Hamburger__line3'></div>
    </div>
  );
};

export default Hamburger;