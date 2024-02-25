import { useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const loginUser = (e) => {
        e.preventDefault();
        const {email, password} = data;
        try {
            
        } catch (error) {
            
        }
    }

    return (
        <form onSubmit={loginUser}>
            <label>Email</label>
            <input type='email' placeholder='Enter your email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
            <label>Password</label>
            <input type='password' placeholder='Enter your password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
            <button type='submit'>Login</button>
        </form>
    )
}

export default Login
