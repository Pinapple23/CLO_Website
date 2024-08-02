import { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
      console.log(response.data);
      alert('Password reset link sent to your email');
    } catch (error) {
      console.error('Error sending password reset email:', error);
      alert('Error sending password reset email');
    }
  };

  return (
    <form onSubmit={handleForgotPassword}>
      <h2>Forgot Password</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <button type="submit">Send Password Reset Link</button>
    </form>
  );
};

export default ForgotPassword;
