import { RouterProvider, createBrowserRouter } from "react-router";
import { todoRoutes } from "./routes/todoRoutes";
import "./App.css";

function App() {
  const router = createBrowserRouter(todoRoutes);
  return <RouterProvider router={router} />;
}

export default App;
