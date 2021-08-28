import '../../../styles/main.css';

//basically wrapper for sections; 
//sets initial styling with "Section" class
//if different styling is needed it adds "Section--modifier; className passed through props = need additional styling"
//id is used for anchor tag targeting and each section has it
const Section = (props) => {
  return (
    <div id={props.id} className={props.className === undefined? 'Section' : 'Section Section--' + props.className}>
      {props.children}
    </div>
  );
};

export default Section;