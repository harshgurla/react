import { useState } from "react"
import { useUser } from "../Context/UserContext";
import "./App.css"

const Login = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const { setIsAuthentication } = useUser();

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!email || !password) {
            alert("please fill the fields")
        }

        if(email === "harsh@gmail.com" && password === "harsh123") {
            setIsAuthentication(true)
        } else {
            alert("wrong details")
        }
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="email"  onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                <button >login</button>
            </form>
        </div>
    )
}

export default Login;