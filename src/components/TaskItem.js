import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TaskItem = ({ task, editTask, deleteTask, toggleComplete }) => {
  return (
    <div className={classnames('task-item', { completed: task.completed })}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => editTask(task)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  editTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default TaskItem;
