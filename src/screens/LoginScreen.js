import { useState } from "react";
import { Alert } from "react-native";
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
      Alert.alert(
        "Authentication failed",
        "Could not login, Please check your credentials or try again later"
      );
    }
  };
  if (isAuthenticating) {
    return <LoadingOverlay message="logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
