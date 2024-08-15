import "./Header.scss";

function Header({ loggedInUser }) {
  // initialization -----------
  // State -------------
  // Handlers ----------
  // View -----------
  return (
    <header>
      <h1 style={{ fontFamily: "'TT Barrels DemiBold', sans-serif" }}>
        Contribution-Hive
      </h1>
      {/* Optionally display loggedInUser */}
      {/* <p className="welcome">{loggedInUser ? loggedInUser.name : "Welcome!"}</p> */}
    </header>
  );
}

export default Header;
