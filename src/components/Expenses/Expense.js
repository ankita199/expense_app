import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';
import React, { useState } from 'react'
import ExpenseList from './ExpenseList.js'

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState('2021')
  const filterExpenses = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  const filteredExpenses = props.items.filter((expense) => (
    expense.date.getFullYear() == filteredYear
  ))
  return (
    <div>
      <div className="expenses">
        <ExpenseFilter selectedYear={filterExpenses} defaultYear={filteredYear} />
        <ExpenseList items={filteredExpenses} />
      </div>
    </div>
  );
}

export default Expense;