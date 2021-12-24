import '../../../styles/main.css';

const Menu = (props) => {
  return (
  <div data-aos="fade-down" className={props.className === undefined? 'Menu' : 'Menu Menu__hidden'}>
    <a href='#projects' className='Menu__link Menu__scrollToProjects'>PROJEKTY</a>
    <a href='#skills' className='Menu__link Menu__scrollToSkills'>UMIEJĘTNOŚCI</a>
    <a href='#about' className='Menu__link Menu__scrollToAbout'>O MNIE</a>
    <a href='#contact' className='Menu__link Menu__scrollToContact'>KONTAKT</a>
  </div>
  );
};

export default Menu;