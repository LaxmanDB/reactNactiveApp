import React, { useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import TextInput from "../components/TextInput";
import * as userApi from "../api/user";

import { useStore } from "../context/StoreProvider";

const Pin = ({ navigation }) => {
  const { getData, setData } = useStore();
  const basicDetails = getData("basicDetails");

  const [pin, setPin] = useState("");
  const [confirmPin, setConformPin] = useState("");
  const [error, setError] = useState("");

  const validatePin = (cpin) => {
    if (pin !== cpin) {
      setError("enter same pin");
    } else {
      setError("");
      setConformPin(cpin);
    }
  };

  const handleSubmit = async () => {
    if (pin === confirmPin) {
    } else {
      alert("enter same pin");
    }
    const [data, error] = await userApi.register({ ...basicDetails, pin });
    if (error) {
      alert("Unable to register");
    } else {
      setData("token", data.accessToken);
      navigation.navigate("Interest");
    }
  };
  return (
    <View>
      <Text style={{ color: "red" }}>{error}</Text>
      <TextInput
        label="PIN"
        maxLength={4}
        keyboardType="number-pad"
        onChangeText={(pin) => {
          setPin(pin);
        }}
      />
      <TextInput
        label="Confirm PIN"
        maxLength={4}
        keyboardType="number-pad"
        onChangeText={(cpin) => {
          validatePin(cpin);
          // onblur={handlepin}
        }}
      />
      {confirmPin ? (
        <Button title="Complete" onPress={handleSubmit} />
      ) : (
        <Text style={{ color: "red" }}></Text>
      )}
    </View>
  );
};

export default Pin;

const styles = StyleSheet.create({});
