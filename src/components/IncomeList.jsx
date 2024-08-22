import React from 'react';

function IncomeList({ incomes }) {
  return (
    <ul>
      {incomes.map((income, index) => (
        <li key={index}>{income.description}: {income.amount}</li>
      ))}
    </ul>
  );
}

export default IncomeList;
