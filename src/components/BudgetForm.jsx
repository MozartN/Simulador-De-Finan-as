import React, { useState } from 'react';

function BudgetForm({ onAddIncome, onAddExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount) {
      const item = { description, amount: parseFloat(amount) };
      if (type === 'income') {
        onAddIncome(item);
      } else {
        onAddExpense(item);
      }
      setDescription('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Valor"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Receita</option>
        <option value="expense">Despesa</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default BudgetForm;
