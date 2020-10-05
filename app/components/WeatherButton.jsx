import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {} from "react-native-gesture-handler";
import colors from "../config/colors";

const WeatherButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.weatherButton}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default WeatherButton;

const styles = StyleSheet.create({
  weatherButton: {
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.darkGray,
    borderRadius: 25,
    marginVertical: 10,
  },
  text: {
    color: colors.whiteColor,
    fontFamily: "WorkSans-Regular",
    fontSize: 20,
  },
});
