import { Form, useActionData, Link, Navigate } from 'react-router'

const Login = () => {

    const data = useActionData();
   

    if(data?.token) {
        localStorage.setItem('token', data.token);
         return <Navigate to='/' />
    }
   
  return (
    <div>
        <h1>Login</h1>
        {
            data && data.message && <p  style={{ color: 'red'}}>{data.message}</p>
        }
        <Form method='post' action='/login'>
            <input type="text" name='email' placeholder='Username' />
            <input type="password" name='password' placeholder='Password' />
            <button type='submit'>Login</button>
        </Form>

        <p>Don't have account?  <Link to="/register">Register now</Link> </p>
    </div>
  )
}

export default Login