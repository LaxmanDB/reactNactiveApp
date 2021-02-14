import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FlatButton from "../components/Button";
import { Button } from "react-native-paper";
const Tsow = () => {
  return (
    <View style={styles.mainView}>
      <Text>Tsow Screen</Text>

      <FlatButton title="abdb" />
    </View>
  );
};

export default Tsow;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
