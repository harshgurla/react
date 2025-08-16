
import { apiClient } from './apiClient'; 

export const fetchTodos = async () => {
  const response = await apiClient.get('/todos');
  if (response.status !== 200) {
    throw new Error('Failed to fetch todos');
  }
  return response.data;
};


export const addTodo = async (newTodo) => {
  const response = await apiClient.post('/todos', newTodo);
  if (response.status !== 201) {
    throw new Error('Failed to add todo');
  }
  return response.data;
};


export const updateTodo = async (id, updatedTodo) => {
  const response = await apiClient.put(`/todos/${id}`, updatedTodo);
  if (response.status !== 200) {
    throw new Error('Failed to update todo');
  }
  return response.data;
};


export const deleteTodo = async (id) => {
  const response = await apiClient.delete(`/todos/${id}`);
  if (response.status !== 200) {
    throw new Error('Failed to delete todo');
  }
  return response.data;
};
