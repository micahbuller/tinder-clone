import React from "react";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs(); // IGNORE LOGS, TAKE OUT LATER.
import StackNavigator from "./StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./hooks/useAuth";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
