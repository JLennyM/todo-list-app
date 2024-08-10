import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, editTask, deleteTask, toggleComplete }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  editTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default TaskList;
