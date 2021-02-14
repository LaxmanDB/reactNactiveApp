import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Formik } from "formik";
import TextInput from "../components/TextInput";
import * as Yup from "yup";
import { useStore } from "../context/StoreProvider";
import googleSignIn from "../helpers/googleSignIn";

const phoneRegExp = /^((\\+[1-9]{1,10}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,8})[ \\-]*)*?[0-9]{3,8}?[ \\-]*[0-9]{3,4}?$/;

const SignUp = ({ navigation }) => {
  const { setData } = useStore();
  const [googleUser, setGoogleUser] = useState();

  let validateSchema = Yup.object().shape({
    firstName: Yup.string().required("enter first name"),
    lastName: Yup.string().required("enter last name"),
    mobile: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
    email: Yup.string().email().lowercase(),
  });

  function getInitialValues() {
    const initialValues = {
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
    };
    if (!googleUser) return initialValues;
    const { familyName, givenName, email } = googleUser;
    initialValues.firstName = givenName;
    initialValues.lastName = familyName;
    initialValues.email = email;
    return initialValues;
  }

  async function handleSignInWithGoogle() {
    const _googleUser = await googleSignIn();
    console.log(_googleUser);
    if (!_googleUser) return;
    setGoogleUser(_googleUser);
  }

  return (
    <View style={{ flex: 1 }}>
      <Formik
        enableReinitialize
        initialValues={getInitialValues()}
        validationSchema={validateSchema}
        onSubmit={(values) => {
          setData("basicDetails", values);
          console.log(values);
          navigation.navigate("Pin");
        }}
      >
        {({ handleChange, handleSubmit, errors, handleBlur, values }) => (
          <View>
            <TextInput
              label="firstName"
              value={values["firstName"]}
              onChangeText={handleChange("firstName")}
              onBlur={handleBlur("firstName")}
            />
            <Text>{errors.firstName}</Text>
            <TextInput
              label="lastName"
              value={values["lastName"]}
              onChangeText={handleChange("lastName")}
              onBlur={handleBlur("lastName")}
            />
            <Text>{errors.lastName}</Text>
            <TextInput
              label="mobile"
              value={values["mobile"]}
              keyboardType="number-pad"
              maxLength={10}
              onChangeText={handleChange("mobile")}
              onBlur={handleBlur("mobile")}
            />
            <Text>{errors.mobile}</Text>
            <TextInput
              label="email"
              value={values["email"]}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
            />
            <Text>{errors.email}</Text>
            <Button title="Next" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
      <View style={styles.googleView}>
        <Button title="SignUp With Google" onPress={handleSignInWithGoogle} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
