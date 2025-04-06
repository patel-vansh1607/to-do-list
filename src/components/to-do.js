import "../styles/to-do.js.css"
import { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, newTask.trim()]);
    setNewTask('');
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h2>📝 To-Do List</h2>
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          placeholder="Enter a task..."
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
