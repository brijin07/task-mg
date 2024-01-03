import React, { useEffect, useState } from 'react';
import TaskList from './pages/TaskList';
import TaskForm from './pages/TaskForm';



const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);


  const addTask = (task) => {
    fetch('http://localhost:4000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    })
      .then((response) => response.json())
      .then((data) => setTasks([...tasks, data]));
  };


  const deleteTask = (taskId) => {
    fetch(`http://localhost:4000/tasks/${taskId}`, {
      method: 'DELETE',
    }).then(() => setTasks(tasks.filter((task) => task.id !== taskId)));
  };

  const editTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setEditingTask(taskToEdit);
  };

  const updateTask = (updatedTask) => {
    fetch(`http://localhost:4000/tasks${editingTask.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    })
      .then((response) => response.json())
      .then(() => setTasks(tasks.map((task) => (task.id === editingTask.id ? updatedTask : task))));
    
    setEditingTask(null);
  };

  const cancelEdit = () => {
    setEditingTask(null);
  };
  return (
    <div>
      <TaskForm onSave={addTask} onCancel={() => {}} />
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
      {editingTask && (
        <TaskForm
          onSave={updateTask}
          onCancel={cancelEdit}
          taskToEdit={editingTask}
        />
      )}
    </div>
  );
};

export default App;

