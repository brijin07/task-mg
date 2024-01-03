import React, { useState } from 'react';

const TaskForm = ({ onSave, onCancel, taskToEdit }) => {
  const [title, setTitle] = useState(taskToEdit ? taskToEdit.title : '');

  const handleSave = () => {
    onSave({ title });
    setTitle('');
  };

  return (
    <div className='ms-5'>
      <h2>{taskToEdit ? 'Edit Task' : 'Add Task'}</h2>
      <input 
        type="text"
        className='form-control  w-25'
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className='btn btn-success mt-3' onClick={handleSave}>{taskToEdit ? 'Update' : 'Add'}</button>
      <button onClick={onCancel} className='btn btn-danger ps-2 ms-2 mt-3'>Cancel</button>
    </div>
  );
};

export default TaskForm;
