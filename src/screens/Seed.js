import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FlatButton from "../components/Button";

const Seed = () => {
  return (
    <View style={styles.mainView}>
      <FlatButton text="Press" onPress={() => console.log("preed")} />
    </View>
  );
};

export default Seed;

const styles = StyleSheet.create({
  mainView: {
    alignItems: "center",
    justifyContent: "center",
  },
});
