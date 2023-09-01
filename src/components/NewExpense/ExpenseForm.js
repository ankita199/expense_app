import './ExpenseForm.css';
import React, { useState } from 'react';
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('title');
  const [enteredAmount, setEnteredAmount] = useState('2.99');
  const [enteredDate, setEnteredDate] = useState(new Date(2021, 5, 12));
  const handleChange = (identifier, value) => {
    if (identifier === 'title') {
      setEnteredTitle(value);
    } else if (identifier === 'amount') {
      setEnteredAmount(value)
    } else {
      setEnteredDate(value);
    }
  }
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('');
    console.log(expenseData)
    props.onSaveExpenseData(expenseData)
  }
  const onCancel = () => {
    props.onCancel(false)
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={(event) => handleChange('title', event.target.value)}></input>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={(event) => handleChange('amount', event.target.value)}></input>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2023-12-31' value={enteredDate} onChange={(event) => handleChange('date', event.target.value)}></input>
        </div>
      </div>
      <div>
        <button type='button' onClick={onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;