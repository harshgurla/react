import { redirect } from 'react-router';
import TodoContainer from '../components/TodoContainer';
import TodoListPage from '../pages/TodoListPage';
import TodoFormPage from '../pages/TodoFormPage';
import {
  getTodosLoader,
  getTodoLoader,
  createTodoAction,
  updateTodoAction,
  deleteTodoAction,
  toggleTodoAction
} from '../actions/todoActions';

export const todoRoutes = [
  {
    path: '/',
    element: <TodoContainer />,
    children: [
      {
        index: true,
        element: <TodoListPage />,
        loader: getTodoLoader,
      },
      {
        path: '/new',
        element: <TodoFormPage />,
        action: createTodoAction ,
      },
      {
        path: '/:id/edit',
        element: <TodoFormPage />,
        loader: getTodoLoader,
        action: updateTodoAction,
      },
      {
        path: '/:id/delete',
        action: deleteTodoAction
      }
    ]
    
  }
];


