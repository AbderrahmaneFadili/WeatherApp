import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { EvilIcons } from "@expo/vector-icons";
import colors from "../config/colors";
const SearchInput = ({ placeholder, ...otherProps }) => {
  return (
    <View style={styles.container}>
      <EvilIcons name="location" size={30} color={colors.darkGray} />
      <TextInput
        placeholder={placeholder}
        autoFocus
        style={styles.textInput}
        {...otherProps}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors.darkGray,
    borderWidth: 2,
  },
  textInput: {
    fontSize: 18,
    marginLeft: 10,
    fontFamily: "WorkSans-Regular",
    width: "100%",
  },
});
