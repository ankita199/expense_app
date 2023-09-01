import { useState } from 'react';
import ExpenseForm from './ExpenseForm.js';
import './NewExpense.css';

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.newExpenseData(expenseData);
    showExpenseForm(false)
  }
  const [toggleExpenseForm, setToggleExpenseForm] = useState(false);
  const showExpenseForm = (state) => {
    setToggleExpenseForm(state)
  }
  return (
    <div className='new-expense'>
      {!toggleExpenseForm &&
        <button type='button' onClick={() => (showExpenseForm(true))}>Add New Expense</button>}
      {toggleExpenseForm &&
        <ExpenseForm onCancel={showExpenseForm} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
}

export default NewExpense;