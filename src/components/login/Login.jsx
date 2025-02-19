import './Login.css';
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
          />
        </div>

        <button type="submit" className="submit-btn">Login</button>
        <div className="form-footer">
          Don&apos;t have an account? <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  )
}

