import { useNavigate } from 'react-router';
import TodoList from '../components/TodoList';


const fetchTodos = async () => {
  return apiClient.get('/todos');
}
export default function TodoListPage() {
  const navigate = useNavigate();
  

  const  {data : todos } = useQuery({
    queryKey: [ 'todos'],
    queryFn: fetchTodos,
  })
  
  const handleToggle = (id) => navigate(`/${id}/toggle`);
  const handleEdit = (id) => navigate(`/${id}/edit`);
  const handleDelete = (id) => navigate(`/${id}/delete`);

  return (
    <>
      <div style={{ marginBottom: '1rem' }}>
        <button 
          onClick={() => navigate('/new')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#89b4fa',
            color: '#1e1e2e',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer'
          }}
        >
          Add New Todo
        </button>
      </div>
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onEdit={handleEdit}
        onDelete={handleDelete}
        emptyMessage="No todos yet. Click 'Add New Todo' to create one!"
      />
    </>
  );
}

