import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FlatButton from "../components/Button";
import { useAuth } from "../context/AuthProvider";
const Home = ({ navigation }) => {
  const { signout, user } = useAuth();

  return (
    <View>
      <View>
        <Text>{JSON.stringify(user)}</Text>
      </View>
      <FlatButton title="SingOut" onPress={signout} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainView: {
    alignContent: "center",
  },
});
