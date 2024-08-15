import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import "./Login.scss";
import { useModal, Modal } from "../UI/Modal";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showModal, modalContent, openModal, closeModal] = useModal(false);

  const exampleUser = {
    id: 277,
    UsertypeID: 2,
    name: "Ezubair ABRAHAM",
    email: "K2990629@kingston.ac.uk",
    knumber: "K2990629",
  };

  const exampleAdmin = {
    id: 820,
    UsertypeID: 1,
    name: "Graeme Jones",
    email: "Ku06696@kingston.ac.uk",
  };

  const handleLogin = (user) => {
    console.log("user wants to log in");
    login(user);
    navigate(`/projects`);
  };

  const handleForgotPassword = () => {
    openModal(
      <>
        <p>
          Input your email and we will send you an email to change your
          password.
        </p>
        <input type="email" placeholder="Email" />
        <button className="login-button" onClick={closeModal}>
          Submit
        </button>
        <button className="close-button" onClick={closeModal}>
          Close
        </button>
      </>,
    );
  };

  return (
    <div className="login-container">
      <div className="login-element">
        <div className="login-info">
          <h2>Login</h2>
        </div>
        <form className="login-form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
          <button
            className="login-button"
            onClick={() => handleLogin(exampleAdmin)}
          >
            Admin Login
          </button>
          <button
            className="login-button"
            onClick={() => handleLogin(exampleUser)}
          >
            Student Login
          </button>
          <a className="link" onClick={handleForgotPassword}>
            Forgot Password?
          </a>
          <a href="/register" className="link">
            Register
          </a>
        </form>
      </div>
      <Modal show={showModal} title="Forgot Password">
        {modalContent}
      </Modal>
    </div>
  );
}

export default Login;
