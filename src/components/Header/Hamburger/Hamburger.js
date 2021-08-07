import '../../../styles/main.sass';

const Hamburger = (props) => {
  return (
    <div className='Hamburger' onClick={props.clicked}>
      <div className='Hamburger__line1'></div>
      <div className='Hamburger__line2'></div>
      <div className='Hamburger__line3'></div>
    </div>
  );
};

export default Hamburger;