import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import "./Account.scss";

function Account() {
  // Initialization -------------------------------------------------------
  const { loggedInUser, logout } = useAuth();
  const navigate = useNavigate();

  // Handlers --------------------------------------------------------------
  const handleLogout = () => {
    console.log("user wants to log out");
    logout();
    navigate(`/home`);
  };

  // View -----------------------------------------------------------------
  return (
    <div className="account-page">
      {loggedInUser ? (
        <div className="account-info">
          <h2>Account Information</h2>
          <p><strong>Name:</strong> {loggedInUser.name}</p>
          <p><strong>User ID:</strong> {loggedInUser.id}</p>
          <p><strong>Email:</strong> {loggedInUser.email}</p>
          <p><strong>Kingston ID:</strong> {loggedInUser.knumber}</p>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p className="logout-message">You have logged out</p>
      )}
    </div>
  );
}

export default Account;
