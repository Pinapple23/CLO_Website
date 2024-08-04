import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; // Adjust the path as necessary
import SignUp from './components/SignUp/SignUp';
import Login from './components/LogIn/LogIn';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import ForgotPassword from './components/ForgotPassword';
import '../public/App.css';
import { AuthProvider } from './components/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
