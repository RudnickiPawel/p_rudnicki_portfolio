import '../../styles/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';


const Footer = (props) => {
  return (
    <div id='contact' className='Footer'>
      <div className="Footer__title">Kontakt</div>
      <div data-aos="zoom-in" className="Footer__container">
        <a className='Footer__link' href="mailto:rudnicki.pawel94@gmail.com">
          <FontAwesomeIcon className='Footer__icon' icon={faEnvelope} />
          rudnicki.pawel94@gmail.com
        </a>
        <a className='Footer__link' href="tel:+48512386720">
          <FontAwesomeIcon className='Footer__icon' icon={faPhoneSquareAlt} />
          512 386 720
        </a>
        <a className='Footer__link' href='https://github.com/RudnickiPawel'>
          <FontAwesomeIcon className='Footer__icon' icon={faGithub} />
          GitHub
        </a>
      </div>


    </div>
  );
};

export default Footer;