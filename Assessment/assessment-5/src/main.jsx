import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { todoRoutes } from './todoRoutes.jsx';

const router = createBrowserRouter(todoRoutes);
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={ queryClient } >
      <RouterProvider router= {router } />
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
