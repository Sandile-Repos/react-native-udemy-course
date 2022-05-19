import axios from "axios";

const API_KEY = "AIzaSyDXFLOUUf5YNB2SjVbCjQyBwLAbCG3NHBM";
export const createUser = async (email, password) => {
  const response = axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
  return response;
};
