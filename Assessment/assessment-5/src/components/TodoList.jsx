
export const TodoList = ({ todos, onDelete }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo._id} className="todo-item">
          <span>{todo.title}</span>
          <button onClick={() => onDelete(todo._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
