import '../../styles/main.css';
// wrapping content and styling edges and opacity
const Card = (props) => {
  return (
    <div className='Card'>
      {props.children}
    </div>
  );
};

export default Card;