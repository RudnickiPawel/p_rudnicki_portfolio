import '../../../styles/main.sass';

const Menu = (props) => {
  return (
    <div className='Menu'>
      <div className='Menu__scrollToProjects'>PROJEKTY</div>
      <div className='Menu__scrollToSkills'>UMIEJĘTNOŚCI</div>
      <div className='Menu__scrollToAbout'>O MNIE</div>
      <div className='Menu__scrollToContact'>KONTAKT</div>
    </div>
  );
};

export default Menu;