import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import './LogIn.css'; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate
  const { login } = useAuth();


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password }, { withCredentials: true });
      console.log(response.data);
      alert('Login successful');
      login(); 
      navigate('/'); // Redirect to home page

    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in');
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h2 className="login-title">Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="login-input"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className="login-input"
      />
      <button type="submit" className="login-button">Login</button>
      <p className="forgot-password-link">
        <Link to="/forgot-password">Forgot My Password?</Link>
      </p>
    </form>
  );
};

export default Login;
