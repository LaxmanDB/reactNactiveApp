import React, { useState, useContext } from "react";
import decode from "jwt-decode";
import { removeToken, setToken } from "../storage/token";

const AuthContext = React.createContext();

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  function login(token) {
    const decoded = decode(token);
    setToken(token);
    setUser(decoded);
  }

  function signout() {
    setUser();
    removeToken();
  }

  return { user, login, signout };
};

export default function AuthProvider({ children }) {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
