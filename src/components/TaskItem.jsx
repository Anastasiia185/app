export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task-item">
      <span
        className={`task-text ${task.completed ? 'completed' : ''}`}
        onClick={() => onToggle(task.id)}
      >
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)} className="delete-btn">
        Видалити
      </button>
    </li>
  );
}