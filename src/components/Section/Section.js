import '../../styles/main.css';

// basically wrapper; if different styling is needed it gets named "Section--modifier"
const Section = (props) => {
  return (
    <div className={props.className === undefined ? 'Section' : 'Section Section--'+ props.className}>
      {props.children}
    </div>
  );
};

export default Section;