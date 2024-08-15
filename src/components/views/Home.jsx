import { useAuth } from '../auth/useAuth';
import './Home.scss';

function Home() {
  const { loggedInUser } = useAuth();
  const message = loggedInUser ? `${loggedInUser.name}!` : 'Welcome! Please log In';

  return (
    <>
      <h1>Welcome </h1>
      <h2>{message}</h2>
      <p> THIS IS THE STYLYING WRIRD THINGY </p>
    </>
  );
}

export default Home;
