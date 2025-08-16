import styles from './styles/TodoList.module.css';

export default function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  return (
    <li className={styles.item}>
      <div
        className={`${styles.checkbox} ${todo.completed ? styles.checked : ''}`}
        onClick={() => onToggle(todo._id)}
      />
      <p className={`${styles.text} ${todo.completed ? styles.completed : ''}`}>
        {todo.title}
      </p>
      <div className={styles.actions}>
        <button
          className={`${styles.button} ${styles.editButton}`}
          onClick={() => onEdit(todo._id)}
        >
          Edit
        </button>
        <button
          className={`${styles.button} ${styles.deleteButton}`}
          onClick={() => onDelete(todo._id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}