import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import './Register.scss';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const data = {
    Username: '',
    Password: '',
    Email: '',
  };

  const handleRegister = (user) => {
    console.log('user wants to log in');
    login(user);
    navigate(`/projects`);
  };

  return (
    <>
      <div className="Register-element">
        <div className="Register-info">
          <h2> Log to Contribution-Hive </h2>
          <div className="Register-form">
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button className="Register-button" onClick={() => handleRegister(data)}>
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
