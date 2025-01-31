import React, { createContext, useState, useEffect } from "react";

// Create Context
export const AuthContext = createContext();

const GlobalContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage when app starts
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setRole(storedUser.role);
    }
    setLoading(false);
  }, []);

  // Simulated Login Function
  const login = (username, userRole) => {
    const userData = { username, role: userRole };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    setRole(userRole);
  };

  // Logout Function
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ user, role, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default GlobalContext;
