// src/routes.js
import { createBrowserRouter } from 'react-router-dom';
import TodoListPage from './pages/TodoListPage';
import TodoFormPage from './pages/TodoFormPage';
import TodoEditPage from './pages/TodoEditPage';
import { fetchTodos } from './api/todoApi'; 


const routes = [
  {
    path: '/',
    element: <TodoListPage />,
    loader: fetchTodos,  
  },
  {
    path: '/add-todo',
    element: <TodoFormPage />,
  },
  {
    path: '/edit-todo/:id',
    element: <TodoEditPage />,
  },
];

const router = createBrowserRouter(routes);

export default router;
