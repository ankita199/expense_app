import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

function ExpenseList(props) {
  console.log(props.items)
  if(props.items.length === 0){
    return(<p>No Expenses found!!</p>)
  }
  return (
    <ul className='expenses-list'>
      {
        props.items.map((expense) => (
          <ExpenseItem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount} />
        ))
      }
    </ul>
  );
}

export default ExpenseList;