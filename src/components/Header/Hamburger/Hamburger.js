import '../../../styles/main.sass';

const Hamburger = (props) => {
  return (
    <div className= {props.isMenuOn ? 'Hamburger Hamburger-x' : 'Hamburger'} onClick={props.clicked}>
      {/* basically if menu is on then hamburger is in X shape*/}
      <div className='Hamburger__line1'></div>
      <div className='Hamburger__line2'></div>
      <div className='Hamburger__line3'></div>
    </div>
  );
};

export default Hamburger;