import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/auth";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const loginHandler = async ({ email, password }) => {
    try {
      setIsAuthenticating(true);
      await login(email, password);
      setIsAuthenticating(false);
    } catch (error) {
      console.log(error);
    }
  };
  if (isAuthenticating) {
    return <LoadingOverlay message="logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
