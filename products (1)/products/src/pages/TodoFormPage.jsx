import { useLoaderData, useNavigate, Form } from 'react-router';
import TodoForm from '../components/TodoForm';

export default function TodoFormPage() {
  const navigate = useNavigate();
  const { todo } = useLoaderData() || { todo: null }; // Will be null for new todo
  
  return (
    <div>
      <Form 
        method={todo ? "put" : "post"}
        style={{ marginBottom: '1rem' }}
      >
        <TodoForm
          initialValue={todo?.title || ''}
          submitLabel={todo ? 'Update Todo' : 'Create Todo'}
          placeholder={todo ? 'Update your task' : 'Add a new task'}
        />
      </Form>
      <button
        type="button"
        onClick={() => navigate('/')}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#45475a',
          color: '#cdd6f4',
          border: 'none',
          borderRadius: '0.5rem',
          cursor: 'pointer',
          marginTop: '1rem'
        }}
      >
        Cancel
      </button>
    </div>
  );
}