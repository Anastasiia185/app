import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
import BMICalculator from './components/Calculator'; 
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showBMI, setShowBMI] = useState(false);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Мій To-Do List на React</h1>
      
      <TaskForm addTask={addTask} />

      {tasks.length === 0 ? (
        <p className="empty-message">Немає завдань. Додайте перше!</p>
      ) : (
        <ul className="task-list">
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      )}

      <hr />
      <button onClick={() => setShowBMI(!showBMI)} className="toggle-bmi-btn">
        {showBMI ? 'Сховати калькулятор ІМТ' : 'Показати калькулятор ІМТ (Завдання 6)'}
      </button>
      {showBMI && <BMICalculator />}
    </div>
  );
}

export default App;
