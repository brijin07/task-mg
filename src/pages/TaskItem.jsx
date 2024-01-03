import React from 'react';

const TaskItem = ({ task, onDelete, onEdit }) => {
  return (
    <div className='mt-3'>
      <span className=''>{task.title}</span>
      <button className='btn btn-danger' onClick={onDelete}>Delete</button>
      <button className='btn btn-success ms-2' onClick={onEdit}>Edit</button>
    </div>
  );
};

export default TaskItem;
