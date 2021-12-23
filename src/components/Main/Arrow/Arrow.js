import '../../../styles/main.css';
import { ReactComponent as SvgArrow } from '../../../assets/down-arrow-svgrepo-com.svg';

const Arrow = (props) => {
  return (
    <a href={props.targetId} className="Arrow">
      <SvgArrow className="Arrow__arrow Arrow__first Arrow__next" />
      <SvgArrow className="Arrow__arrow Arrow__second Arrow__next" />
    </a>
  );
};

export default Arrow;