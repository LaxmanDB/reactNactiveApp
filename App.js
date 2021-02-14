import React, { useEffect } from "react";
import { Platform, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import AuthProvider, { useAuth } from "./src/context/AuthProvider";
import StoreProvider from "./src/context/StoreProvider";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import AuthNavigator from "./src/navigation/AuthNavigator";
import AppNavigator from "./src/navigation/AppNavigator";
import paperTheme from "./src/assets/themes/paperTheme";
import { getToken } from "./src/storage/token";
const App = () => {
  const { user, login } = useAuth();

  useEffect(() => {
    restoreUser();
  }, []);

  async function restoreUser() {
    const token = await getToken();
    if (token) login(token);
  }

  return (
    <SafeAreaView style={styles.container}>
      <PaperProvider theme={paperTheme}>
        <NavigationContainer>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaView>
  );
};

export default () => (
  <StoreProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StoreProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
