import { useState } from "react"
import { useUser } from "../context/UserContext";
import { useNavigate, Form } from 'react-router'

const Login = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const { setIsAuthentication}  = useUser();
    const navigate = useNavigate();

    const handleSubmit = () => {

        if(email === "harsh@gmail.com" && password === "harsh123") {
            setIsAuthentication(true);
            localStorage.setItem("authentication", "true");
             navigate ("/home");

        } else {
            alert("wrong details")
        }
    }
    return (
        <div>
            <h1>Login</h1>

            <Form method="post" onSubmit={ handleSubmit }>

                <input
                 type="email"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                 type="password"
                 name="password"
                 placeholder="password"
                 onChange={(e) => setPassword(e.target.value)}
                   />
                <button type="submit" >login</button>
            </Form>
        </div>
    )
}

export default Login;