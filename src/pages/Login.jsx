import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./Form.css";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const loginUser = async (e) => {
        e.preventDefault();
        const { email, password } = data;
        try {
            const { data } = await axios.post("/login", {
                email,
                password
            });
            if (data.error) {
                toast.error(data.error);
            } else {
                setData({});
                navigate("/dashboard");
            }
        } catch (error) {

        }
    }

    return (
        <form onSubmit={loginUser} className="container">
            <div className="row">
                <div className="col-25"><label>Email</label></div>
                <div className="col-75">
                    <input type='email' placeholder='Enter your email...' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                </div>
            </div>

            <div className="row">
                <div className="col-25"><label>Password</label></div>
                <div className="col-75">
                    <input type='password' placeholder='Enter your password...' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                </div>
            </div>
            <button type='submit'>Login</button>
        </form>
    )
}

export default Login
