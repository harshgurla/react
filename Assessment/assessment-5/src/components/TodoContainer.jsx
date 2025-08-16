import { Outlet } from 'react-router';

export const TodoContainer = () =>  {
  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
