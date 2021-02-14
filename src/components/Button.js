import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const FlatButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttontext}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FlatButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#f01d71",
  },
  buttontext: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 15,
    textAlign: "center",
  },
});

/*
 < Button
    {...rest}
    type={buttonType}
    title={title}
    buttonStyle={{ borderColor: buttonColor, borderRadius: 20 }}
    titleStyle={{ color: buttonColor }}
  />
  */
