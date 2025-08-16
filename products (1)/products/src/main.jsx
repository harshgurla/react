import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import  { todoRoutes } from './routes/todoRoutes.jsx'


const router = createBrowserRouter(todoRoutes)
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={ queryClient } >
    <RouterProvider router={router} />
    </QueryClientProvider >

  </StrictMode>,
)
