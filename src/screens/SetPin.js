import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TextInput from "../components/TextInput";
import * as userApi from "../api/user";
const SetPin = ({ navigation }) => {
  const [pin, setPin] = useState("");
  const [Cpin, setCPin] = useState("");
  const [error, setError] = useState("");
  const token = navigation.Params.token;

  const confirm = async () => {
    const [data, error] = await userApi.reset(pin, token);
    if (error) {
      console.log(error);
    } else {
      console.log(data);
      navigation.navigate("Login");
    }
  };
  return (
    <View>
      <TextInput label="enter pin" onChangeText={(pin) => setPin(pin)} />
      <TextInput label="confirm pin" onChangeText={(cpin) => setCPin(cpin)} />
      <Button title="Set" onPress={() => confirm()} />
    </View>
  );
};

export default SetPin;

const styles = StyleSheet.create({});
