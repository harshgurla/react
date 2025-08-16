import { useState } from "react";

const Login = () => {
    const [useName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h1>Login</h1>
            <form action="" onSubmit={(e)=> handleLogin(e)}>
                <input name="usename" type="text" placeholder="usename" value={useName} onChange={(e)=> setUserName(e.target.value)}/>
                <input name="password" type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;