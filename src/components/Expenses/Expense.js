import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';
import React, { useState } from 'react'
import ExpenseList from './ExpenseList.js'
import ExpensesChart from './ExpensesChart.js'
import Card from '../UI/Card';

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState('2021')
  const filterExpenses = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  const filteredExpenses = props.items.filter((expense) => (
    expense.date.getFullYear().toString() === filteredYear
  ))

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter selectedYear={filterExpenses} defaultYear={filteredYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div >
  );
}

export default Expense;