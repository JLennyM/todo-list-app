import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { loadTasks, saveTasks } from './utils/storage';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    const savedTasks = loadTasks();
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (task) => {
    task.id = Date.now();
    task.completed = false;
    setTasks([...tasks, task]);
  };

  const editTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearEdit = () => {
    setCurrentTask(null);
  };

  return (
    <div className="App">
      <h1>My Task Manager</h1>
      <TaskForm
        addTask={addTask}
        editTask={editTask}
        currentTask={currentTask}
        clearEdit={clearEdit}
      />
      <TaskList
        tasks={tasks}
        editTask={(task) => setCurrentTask(task)}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
};

export default App;
