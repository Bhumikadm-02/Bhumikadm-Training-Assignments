import React, { useState } from 'react';


function TodoList() {
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = event.target.elements.task.value;
    setTasks([...tasks, { name: newTask, completed: false }]);
    event.target.reset();
  };

  const handleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleDelete = () => {
    const newTasks = tasks.filter((task) => !task.completed);
    setTasks(newTasks);
  };

  return (
    <div class="todo">
      <div className="logo">
          <img src="https://png.pngtree.com/png-vector/20190525/ourmid/pngtree-todotasklistchecktime-white-glyph-icon-colorful-circle-b-png-image_1064346.jpg" alt="Company Logo" width="80" height="80" />
          <h1>Todo List</h1>
      </div>
      
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="Add task" />
        <button type="submit">Add</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleComplete(index)}
            />
            {task.name}
          </li>
        ))}
      </ul>

      <button class="del" onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TodoList;