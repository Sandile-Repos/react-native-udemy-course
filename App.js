// import "react-native-gesture-handler";
// import { View, StyleSheet, Text, Button, StatusBar } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { Ionicons } from "@expo/vector-icons";

// const Drawer = createDrawerNavigator();

// import WelcomeScreen from "./src/screens/WelcomeScreen";
// import UserScreen from "./src/screens/UserScreen";

// export default function App() {
//   return (
//     <>
//       <StatusBar style="light" />
//       <NavigationContainer>
//         <Drawer.Navigator
//           screenOptions={{
//             headerStyle: { backgroundColor: "#3c0a6b" },
//             headerTintColor: "white",
//             drawerActiveBackgroundColor: "#f0e1ff",
//             drawerActiveTintColor: "#3c0a6b",
//             // drawerInactiveTintColor: "green",
//             // drawerStyle: { backgroundColor: "#ccc" },
//           }}
//         >
//           <Drawer.Screen
//             name="Welcome"
//             component={WelcomeScreen}
//             options={{
//               drawerLabel: "Welcome Screen",
//               drawerIcon: ({ color, size }) => (
//                 <Ionicons size={size} name="home" color={color} />
//               ),
//             }}
//           />
//           <Drawer.Screen
//             name="User"
//             component={UserScreen}
//             options={{
//               drawerIcon: ({ color, size }) => (
//                 <Ionicons size={size} name="person" color={color} />
//               ),
//             }}
//           />
//         </Drawer.Navigator>
//       </NavigationContainer>
//     </>
//   );
// }
import "react-native-gesture-handler";
import { View, StyleSheet, Text, Button, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

import WelcomeScreen from "./src/screens/WelcomeScreen";
import UserScreen from "./src/screens/UserScreen";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#3c0a6b" },
            headerTintColor: "white",
            tabBarActiveTintColor: "#3c0a6b",
          }}
        >
          <BottomTab.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              tabBarIcon: ({ size, color }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <BottomTab.Screen
            name="User"
            component={UserScreen}
            options={{
              tabBarIcon: ({ size, color }) => (
                <Ionicons name="person" color={color} size={size} />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
