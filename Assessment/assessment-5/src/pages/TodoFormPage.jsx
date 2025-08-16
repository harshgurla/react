import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useMutation } from '@tanstack/react-query';
import { addTodo } from '../api/todoApi';
import {TodoForm} from '../components/TodoForm';

export const TodoFormPage = ()  => {
  const [todoTitle, setTodoTitle] = useState('');
  const navigate = useNavigate();

  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      navigate('/');
    },
    onError: (error) => {
      alert(`Error: ${error.message}`);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ title: todoTitle, completed: false });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TodoForm
          todoTitle={todoTitle}
          setTodoTitle={setTodoTitle}
          submitLabel="Add Todo"
        />
      </form>
    </div>
  );
}
