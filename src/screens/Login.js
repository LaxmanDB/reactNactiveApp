import { Formik } from "formik";
import React, { useRef } from "react";
import { Button, StyleSheet, View, SafeAreaView, Text } from "react-native";

import { useAuth } from "../context/AuthProvider";
import TextInput from "../components/TextInput";
import * as userApi from "../api/user";

const Login = ({ navigation }) => {
  const { login } = useAuth();
  const mobileRef = useRef();

  return (
    <SafeAreaView style={styles.Viewstyle}>
      <Formik
        initialValues={{
          mobile: "",
          pin: "",
        }}
        validate={({ mobile, pin }) => {
          const errors = {};
          if (mobile.length !== 10) {
            errors.mobile = "Enter 10 digit number";
          }
          if (pin !== 4) {
            errors.pin = "";
          }
        }}
        onSubmit={async (values) => {
          console.log(values);
          const [data, error] = await userApi.login(values.mobile, values.pin);
          if (error) {
            console.error(error);
          }
          login(data.accessToken);
          console.log(data);
        }}
      >
        {({ handleChange, handleSubmit, errors, handleBlur }) => (
          <View>
            <TextInput
              label="Mobile"
              maxLength={10}
              ref={mobileRef}
              keyboardType="number-pad"
              onChangeText={handleChange("mobile")}
              onBlur={handleBlur("mobile")}
            />
            <Text>{errors.mobile}</Text>
            <TextInput
              label="Pin"
              maxLength={4}
              onChangeText={handleChange("pin")}
              keyboardType="number-pad"
              onBlur={handleBlur("pin")}
            />
            <Text>{errors.pin}</Text>
            <Button title="Login" onPress={handleSubmit} />
          </View>
        )}
      </Formik>

      <Button title="SignUp" onPress={() => navigation.navigate("SignUp")} />

      <Button title="forgot PIN" onPress={() => navigation.navigate("Reset")} />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  Viewstyle: {
    flex: 1,
    flexDirection: "column",
  },
  googleView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
