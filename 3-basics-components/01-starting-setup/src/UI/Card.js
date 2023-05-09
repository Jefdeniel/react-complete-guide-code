import './Card.css';

function Card(props) {
  // extra spatie na 'card' is nodig om de juiste CSS klasse mee te geven, anders wordt het cardexpenses ipv card-expenses
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>
  
}

export default Card;