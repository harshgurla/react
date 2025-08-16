import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useQuery, useMutation } from '@tanstack/react-query';
import { fetchTodos } from '../api/todoApi';  
import { updateTodo } from '../api/todoApi';
import {TodoForm} from '../components/TodoForm';

export default function TodoEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: todo, isLoading, error } = useQuery(['todos', id], fetchTodos, {
    enabled: !!id,  
  });

  const mutation = useMutation(updateTodo, {
    onSuccess: () => {
      navigate('/');
    },
    onError: (error) => {
      alert(`Error: ${error.message}`);
    },
  });

  const [todoTitle, setTodoTitle] = useState('');

  useEffect(() => {
    if (todo) {
      setTodoTitle(todo.title);
    }
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ id, updatedTodo: { title: todoTitle } });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TodoForm
          todoTitle={todoTitle}
          setTodoTitle={setTodoTitle}
          submitLabel="Update Todo"
        />
      </form>
    </div>
  );
}
