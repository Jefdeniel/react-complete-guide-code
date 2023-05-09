import ExpenseDate from './ExpenseDate.js';
import Card from '../../UI/Card.js';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const clickHandler = () => {
    console.log('clicked')
  }

  return (
      <Card className='expense-item'>
         <ExpenseDate date={props.date} />   
          <div className="expense-item__description">
            <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
          <button onClick={clickHandler}>button</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
