import React, { useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import TextInput from "../components/TextInput";
import * as userApi from "../api/user";
const Reset = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [OTP, setOtp] = useState("");
  const [openOtp, setOpenOtp] = useState(true);
  const [error, setError] = useState("");

  const handleReset = async () => {
    const [data, error] = await userApi.reset(email);
    if (error) {
      setError("enter correct email ");
    } else {
      setError("");
      setOpenOtp(false);
    }
  };

  const confirmOtp = async () => {
    const [data, error] = await userApi.confirmotp(OTP);
    if (error) {
      setError("enter correct otp ");
    } else {
      console.log(data);
      navigation.navigate("setPin", { token: data.otpToken });
    }
  };
  return (
    <View>
      {openOtp ? (
        <View>
          <Text>{error}</Text>
          <TextInput
            label="email"
            value={email}
            onChangeText={(eml) => setEmail(eml)}
          />
          <Button title="Get OTP" onPress={handleReset} />
        </View>
      ) : (
        <View>
          <Text>{error}</Text>
          <TextInput
            label="enter OTP"
            maxLength={4}
            keyboardType="number-pad"
            onChangeText={(otp) => setOtp(otp)}
          />
          <Button title="Confirm" onPress={confirmOtp} />
        </View>
      )}
    </View>
  );
};

export default Reset;

const styles = StyleSheet.create({});
