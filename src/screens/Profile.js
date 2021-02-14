import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Menu = () => {
  return (
    <View style={styles.mainView}>
      <Text>Profile Screen</Text>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
