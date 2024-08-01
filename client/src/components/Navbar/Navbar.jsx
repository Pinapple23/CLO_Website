import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '/Logo-NoBG.png'; // Your logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          <Link to="/">
            <img src={logo} alt="MyStore Logo" className="navbar-logo" />
          </Link>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/signup">Sign Up</Link>
          </li>
          <li className="navbar-item">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
