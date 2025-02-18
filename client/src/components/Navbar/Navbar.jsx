import { NavLink } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './Navbar.css';
import logo from '/Logo-NoBG.png';

const Navbar = () => {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          <NavLink to="/">
            <img src={logo} alt="MyStore Logo" className="navbar-logo" />
          </NavLink>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/signup" className={({ isActive }) => isActive ? "active" : ""}>
              Sign Up
            </NavLink>
          </li>
          <li className="navbar-item">
            {isAuthenticated ? (
              <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>
                Profile
              </NavLink>
            ) : (
              <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
