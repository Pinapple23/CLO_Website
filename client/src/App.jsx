import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; // Adjust the path as necessary
import SignUp from './components/SignUp/SignUp';
import Login from './components/LogIn/LogIn';
import Home from './components/Home/Home';
import ForgotPassword from './components/ForgotPassword';
import '../public/App.css';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home/>} /> {/* Example Home component */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
