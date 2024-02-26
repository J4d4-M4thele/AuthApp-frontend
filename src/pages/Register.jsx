import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Register = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const registerUser = async (e) => {
        e.preventDefault();
        const { name, email, password } = data;
        try {
            const { data } = await axios.post('/register', {
                name, email, password
            })
            if (data.error) {
                toast.error(data.error);
            } else {
                setData({})
                toast.success("Login Successful. Welcome!")
                navigate("/login")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={registerUser} className="container">
            <div className="row">
                <div className="col-25"><label>Name</label></div>
                <div className="col-75">
                    <input type='text' placeholder='Enter your name...' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                </div>
            </div>

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
            <button type='submit'>Register</button>
        </form>
    )
}

export default Register
