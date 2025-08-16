import styles from './styles/TodoForm.module.css';

export default function TodoForm({ 
  initialValue = '', 
  submitLabel = 'Add',
  placeholder = 'Add a new task'
}) {
  return (
    <div className={styles.form}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          id="todo-input"
          name="todoText"
          className={styles.input}
          defaultValue={initialValue}
          placeholder=" "
          required
        />
        <label htmlFor="todo-input" className={styles.label}>
          {placeholder}
        </label>
      </div>
      <button type="submit" className={styles.button}>
        {submitLabel}
      </button>
    </div>
  );
}

