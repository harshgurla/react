import { Form, Link, useActionData } from 'react-router';

const Register = () => {

  const data = useActionData();

  
  return (
    <div>
        <h1>register</h1>
        {
          data && data.message && <p style={{ color: 'red'}}>{data.message}</p>
        }
        <Form method='post' action='/register'>
            <input type="text" name='username' placeholder='Username' />
            <input type="text" name='email' placeholder='email' />
            <input type="password" name='password' placeholder='Password' />
            <button type='submit'>Login</button>
        </Form>
         <p>Already have a account? <Link to="/login">login</Link></p>
    </div>
  )
}

export default Register