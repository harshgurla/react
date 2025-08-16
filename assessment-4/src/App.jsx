import { RouterProvider } from 'react-router'
import { router } from './Router'
import { apiClient } from './apiClient'

const App = () => {
  return ( <RouterProvider  router={router}/>
  
  )
}

export default App