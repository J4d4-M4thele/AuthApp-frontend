import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <Link to='/' className="link">Home</Link>
      <Link to='/register' className="link">Register</Link>
      <Link to='/login' className="link">Login</Link>
    </nav>
  )
}

export default Navbar
