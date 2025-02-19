import './Register.css';    
import { Link } from 'react-router-dom';
export default function Register() {
    return (
        <div className="register-container">
            <form className="register-form">
                <h2>Create Account</h2>

                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter username"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter password"
                    />
                    <div className="password-requirements">
                        Password must be at least 8 characters long and include a number
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm password"
                    />
                </div>

                <button type="submit" className="submit-btn">
                    Register
                </button>

                <div className="form-footer">
                    Already have an account? <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    );
}

