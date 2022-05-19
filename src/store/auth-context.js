import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState();

  // useEffect(() => {
  //   const fecthToken = async () => {
  //     const storedToken = await AsyncStorage.getItem("token");

  //     if (storedToken) {
  //       setAuthToken(storedToken);
  //     }
  //   };

  //   fecthToken();
  // }, []);

  const authenticate = (token) => {
    setAuthToken(token);
    AsyncStorage.setItem("token", token); // always a string, an object is converted to json which is technically a string. token is already a string
  };

  const logout = () => {
    setAuthToken(null);
    AsyncStorage.removeItem("token", token);
  };

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
