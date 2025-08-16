import { Outlet } from 'react-router';
import styles from './styles/TodoContainer.module.css';

export default function TodoContainer() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

