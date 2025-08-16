import { redirect } from 'react-router';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://backendapi-cwp7.onrender.com/api/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export async function createTodoAction({ request}) {
  const formData = await request.formData();
  const text = formData.get('todoText');

  if (!text?.trim()) {
    throw new Error('Todo Text is required');
  }

  const response = await apiClient.post('/todos', {
    title: text.trim(),
    completed: false
  });

  if (response.status !== 201)
    throw new Error('Failed to create Todo');

  return redirect('/');
}

export async function updateTodoAction({ params, request }) {
    const id = params.id;
    const formData = await request.formData();
    const text = formData.get('todotext');

    if (!text?.trim()) {
      throw new Error('Todo text is required');
    }

    const response = await apiClient.put(`/todos/${id}`, {
      title: text.trim(),
    });

    if(response.status !== 200) 
      throw new Error('failed to update todo');

    return redirect('/');
}


// Loader function to get todos
export async function getTodosLoader() {
  const response = await apiClient.get('/todos');
    if(response.status !== 200) {
      throw new Error('Failed to fetch todos')
    } 
    const todos = response.data;
    return { todos};
  
}

// Loader function to get a single todo
export async function getTodoLoader({ params} ) {
    const id = params.id;

    console.log(id)

    const response = await apiClient.get(`todos/${id}`);

    if(response.status !== 200) {
      throw new Error('Failed to fetch todo');
    }
    const todo = response.data;

    return { todo };
}



// These actions would be used in your route configurations
export async function toggleTodoAction({ params }) {
  const id = params.id;
  const todos = JSON.parse(localStorage.getItem('todos') || '[]');
  const updatedTodos = todos.map(todo =>
    todo.id === Number(id) ? { ...todo, completed: !todo.completed } : todo
  );
  localStorage.setItem('todos', JSON.stringify(updatedTodos));
  return redirect('/');
}

export async function deleteTodoAction({ params }) {
  const id = params.id;
  
  const response = await apiClient.delete(`/todos/${id}`);
  console.log(response);
  if(response.status !== 200)
    throw new Error('Failed to delete todo');
  
  return redirect('/');
}
