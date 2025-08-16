import HomePage from "./components/Home";
import Login from "./components/Login";
import { useUser } from "./Context/UserContext";


const App = () => {
  
const {isAuthentication } = useUser();

  return (
    <>
    {
      isAuthentication ? <HomePage /> : <Login />
    }
    </>
  )
  }

export default App;