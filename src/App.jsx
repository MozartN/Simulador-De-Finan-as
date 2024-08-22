import React, { useState } from 'react';
import BudgetForm from './components/BudgetForm';
import ExpenseList from './components/ExpenseList';
import IncomeList from './components/IncomeList';
import './App.css'; // Importe o arquivo CSS

function App() {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const handleAddIncome = (income) => {
    setIncomes([...incomes, income]);
  };

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const getTotal = (items) => {
    return items.reduce((total, item) => total + item.amount, 0);
  };

  return (
    <div className="app-container">
      <h1>Simulador de Finanças Pessoais</h1>
      <BudgetForm onAddIncome={handleAddIncome} onAddExpense={handleAddExpense} />
      <div className="lists-container">
        <div className="list">
          <h2>Receitas</h2>
          <IncomeList incomes={incomes} />
        </div>
        <div className="list">
          <h2>Despesas</h2>
          <ExpenseList expenses={expenses} />
        </div>
      </div>
      <div className="summary">
        <h2>Resumo</h2>
        <p>Receitas: {getTotal(incomes)}</p>
        <p>Despesas: {getTotal(expenses)}</p>
        <p>Balanço: {getTotal(incomes) - getTotal(expenses)}</p>
      </div>
    </div>
  );
}

export default App;
