import { useQuery, useMutation } from '@tanstack/react-query';
import { fetchTodos, deleteTodo } from '../api/todoApi';  
import TodoList from '../components/TodoList';
import { useNavigate } from 'react-router-dom';

export const TodoListPage = () => {
  const navigate = useNavigate();

  const { data: todos, isLoading, error } = useQuery(['todos'], fetchTodos);

  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
    onError: (error) => {
      alert(`Error: ${error.message}`);
    },
  });

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  const handleEdit = (id) => {
    navigate(`/edit-todo/${id}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <button onClick={() => navigate('/add-todo')}>Add Todo</button>
      <TodoList
        todos={todos}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </>
  );
}
