import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

function ExpenseList(props) {
  if(props.items.length === 0){
    return(<p>No Expenses found!!</p>)
  }
  return (
    <ul className="expense-list">
      {
        props.items.map((expense) => (
          <ExpenseItem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount} />
        ))
      }
    </ul>
  );
}

export default ExpenseList;