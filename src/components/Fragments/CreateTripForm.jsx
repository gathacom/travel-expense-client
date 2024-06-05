import { addTrip } from '@/services/tripService';
import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';


const CreateTripForm = ({ visible, onClose, onAddTrip }) => {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');

  const handleAddTrip = async () => {
    addTrip({ title, description }, (status, res) => {
      if (status) {
        if (res.status === 200) {
          alert('Success: Trip added successfully');
          onClose(); // Menutup modal
          setTitle('');
          setDescription('');
        } else {
          alert('Error: Failed to add trip');
        }
      }
    });
  };

  return (
    <Modal styles={{ modal: { borderRadius: '10px' } }} open={visible} onClose={onClose} center>
      <div className="p-8 flex flex-col items-center">
        <h2 className="mb-6 text-2xl font-bold text-center">Add New Trip</h2>
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
        <div className="flex space-x-4">
          <button
            onClick={handleAddTrip}
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

export default CreateTripForm;
