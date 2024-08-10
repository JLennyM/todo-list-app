import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TaskForm = ({ addTask, editTask, currentTask, clearEdit }) => {
  const [task, setTask] = useState({ name: '', description: '' });

  useEffect(() => {
    if (currentTask) {
      setTask(currentTask);
    } else {
      setTask({ name: '', description: '' });
    }
  }, [currentTask]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name && task.description) {
      if (currentTask) {
        editTask(task);
      } else {
        addTask(task);
      }
      clearEdit();
      setTask({ name: '', description: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={task.name}
        onChange={handleChange}
        placeholder="Task Name"
        required
      />
      <input
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Task Description"
        required
      />
      <button type="submit">{currentTask ? 'Update Task' : 'Add Task'}</button>
      {currentTask && <button onClick={clearEdit}>Cancel Edit</button>}
    </form>
  );
};

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  currentTask: PropTypes.object,
  clearEdit: PropTypes.func.isRequired,
};

export default TaskForm;
