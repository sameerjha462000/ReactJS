import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEdited, setIsEdited] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEdited(false);
  };

  // When Add New Expense is clicked, then we should set isEdited to true
  const handleClick = () => {
    setIsEdited(true);
  }

  // When the cancel has been clicked, then we should set isEdited to false
  const handleCancel = () => {
    setIsEdited(false);
  }

  return (
    <div className='new-expense'>

      {/* Display button only when the form is not being editedd */}
      {!isEdited && <button type='button' onClick = {handleClick}>Add New Expense</button>}

      {/* Show Expense form only when the isEdited is true */}
      {isEdited && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {handleCancel} />}
    </div>
  );
};

export default NewExpense;