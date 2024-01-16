import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post("http://localhost:8080/api/login", inputs, {
      withCredentials: true,
    });

    setCurrentUser(res.data)
  };

  const register = async (inputs) => {
    const res = await axios.post("http://localhost:8080/api/register", inputs, {
      withCredentials: true,
    });

    setCurrentUser(res.data);
  };




  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, register,setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};