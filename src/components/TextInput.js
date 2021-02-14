import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput as PaperTextInput } from "react-native-paper";

const TextInput = ({ label, onChangeText, value, ...extra }, ref) => {
  return (
    <View>
      <PaperTextInput
        label={label}
        onChangeText={onChangeText}
        value={value}
        ref={ref}
        {...extra}
      />
    </View>
  );
};

export default React.forwardRef(TextInput);

const styles = StyleSheet.create({});
