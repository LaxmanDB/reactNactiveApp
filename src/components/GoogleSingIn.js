import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import * as Google from "expo-google-app-auth";
const IOS_CLIENT_ID =
  "692888661368-hvc2884tapg2jkhj5nif67cgjqrgjsne.apps.googleusercontent.com";
const ANDROID_CLIENT_ID =
  "692888661368-862dvk8lcd0nklesatuat66kolr5b4p6.apps.googleusercontent.com";

const GoogleSignIn = () => {
  SingInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: ANDROID_CLIENT_ID,
        iosClientId: IOS_CLIENT_ID,
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        console.log(result.user);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log(e);
      return { error: true };
    }
  };

  return (
    <View style={styles.viewstyle}>
      <Button title="Login With Google" onPress={SingInWithGoogle} />
    </View>
  );
};

export default GoogleSignIn;

const styles = StyleSheet.create({
  viewstyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
