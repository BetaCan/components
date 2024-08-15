import Header from "./Header.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { useAuth } from "../auth/useAuth";
import "./Layout.scss";

function Layout(props) {
  const { loggedInUser } = useAuth();
  return (
    <div className="layout">
      <Header loggedInUser={loggedInUser} />
      <Navbar />

      <main>{props.children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
