import { useState } from "react";
import { Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { createUser } from "../util/auth";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const signupHandler = async ({ email, password }) => {
    try {
      setIsAuthenticating(true);
      await createUser(email, password);
      setIsAuthenticating(false);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not create user, please check your inputs or try again later"
      );
    }
  };
  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user.." />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
