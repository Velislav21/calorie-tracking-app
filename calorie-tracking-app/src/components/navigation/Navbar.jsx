import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <Link to="/">YourLogo</Link>
                </div>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/create" className="nav-link">Create</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
