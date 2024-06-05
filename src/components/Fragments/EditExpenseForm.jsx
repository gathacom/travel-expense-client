import { editExpense, expenseById, updateExpense } from '@/services/expenseService';
import React, { useState, useEffect } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const EditExpenseForm = ({ visible, onClose, tripId, expenseId, onEditExpense }) => {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const fetchExpense = async () => {
        try {
          await expenseById(tripId, expenseId, (success, response) => {
            if (response.status === 200) {
              console.log(response.data.expense.amount);
              setTitle(response.data.expense.title);
              setDescription(response.data.expense.description);
              setAmount(response.data.expense.amount);
            }
          })
        } catch (error) {
          Alert.alert("Error", error.message);
        }
      };
      fetchExpense();
  }, [expenseId, tripId]);

  const handleEditExpense = async () => {
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount)) {
      alert('Error: Amount must be a valid number');
      return;
    }

    editExpense(tripId, expenseId, { title, description, amount: parsedAmount }, (status, res) => {
      if (status) {
        if (res.status === 200) {
          alert('Success: Expense updated successfully');
          onClose(); 
        } else {
          alert('Error: Failed to update expense');
        }
      }
    });
  };

  return (
    <Modal styles={{ modal: { borderRadius: '10px' } }} open={visible} onClose={onClose} center>
      <div className="p-8 flex flex-col items-center">
        <h2 className="mb-6 text-2xl font-bold text-center">Edit Expense</h2>
        <input
          className="w-full mb-4 px-4 py-2 border-b-2 border-blue-500 text-red-600 rounded focus:outline-none"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full mb-4 px-4 py-2 border-b-2 border-blue-500 text-blue-600 rounded focus:outline-none"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="w-full mb-4 px-4 py-2 border-b-2 border-blue-500 text-blue-600 rounded focus:outline-none"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div className="flex space-x-4">
          <button
            onClick={handleEditExpense}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Submit
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditExpenseForm;
