import TodoItem from './TodoItem';
import styles from './styles/TodoList.module.css';

export default function TodoList({ 
  todos, 
  onToggle, 
  onEdit, 
  onDelete,
  emptyMessage = 'No todos yet. Add one above!' 
}) {
  if (todos.length === 0) {
    return (
      <div className={styles.list}>
        <p style={{ color: '#6c7086', textAlign: 'center' }}>
          {emptyMessage}
        </p>
      </div>
    );
  }

  return (
    <ul className={styles.list}>
      {todos.map(todo => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}