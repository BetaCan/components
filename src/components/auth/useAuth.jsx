import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Initialization ----------------------------------

  // State -------------------------------------------
  const [loggedInUser, setLoggednInUser] = useState(null);

  // Handlers ----------------------------------------
  const login = (user) => {
    console.log(`Logging in ${JSON.stringify(user)}`);
    setLoggednInUser(user);
  };
  const logout = () => {
    console.log(`Logging user out`);
    setLoggednInUser(null);
  };

  // View --------------------------------------------
  return (
    <AuthContext.Provider value={{ loggedInUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
