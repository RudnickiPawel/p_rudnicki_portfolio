import '../../../styles/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Arrow = (props) => {
  return (
    <a href={props.targetId} className='Arrow__container' >
      <FontAwesomeIcon className={props.version === 'white' ? 'Arrow' : 'Arrow Arrow--black' } icon={faAngleDown} />
    </a>
  );
};

export default Arrow;