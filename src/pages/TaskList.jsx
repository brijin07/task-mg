import TaskItem from './TaskItem';


const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div className='ms-5 mt-4'>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          
          task={task}
          onDelete={() => onDelete(task.id)}
          onEdit={() => onEdit(task.id)}
        />
      ))}

      
    </div>
  );
};

export default TaskList;
