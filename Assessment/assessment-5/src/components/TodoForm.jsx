import { useState } from 'react';

export  const TodoForm = ({ submitLabel, onSubmit }) => {
  const [title, setTitle] = useState('');
  
  const handleChange = (e) => setTitle(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit(title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={handleChange} 
        placeholder="Enter todo title" 
        required
      />
      <button type="submit">{submitLabel}</button>
    </form>
  );
}
