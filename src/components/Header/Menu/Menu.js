import '../../../styles/main.css';

const Menu = (props) => {
  return (
    
    <div className='Menu'>
      <div className='Menu__link Menu__scrollToProjects'>PROJEKTY</div>
      <div className='Menu__link Menu__scrollToSkills'>UMIEJĘTNOŚCI</div>
      <div className='Menu__link Menu__scrollToAbout'>O MNIE</div>
      <div className='Menu__link Menu__scrollToContact'>KONTAKT</div>
    </div>
  );
};

export default Menu;