import { useAuth } from '../AuthContext';
import './Profile.css'; // Import the CSS file for styling

const Profile = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      {user ? (
        <div className="profile-details">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>Mobile Number:</strong> {user.mobileNumber}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default Profile;
