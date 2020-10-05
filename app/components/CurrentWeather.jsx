import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";

const CurrentWeather = ({ icon, date, description, temperature }) => {
  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{date.toString()}</Text>
      </View>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.temperatureContainer}>
        <Text style={styles.temperature}>{temperature}</Text>
        <Text style={styles.weatherUnit}>°</Text>
      </View>
    </View>
  );
};

export default CurrentWeather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 10,
  },
  date: {
    fontSize: 22,
    fontFamily: "WorkSans-SemiBold",
    color: colors.darkGray,
    marginBottom: 10,
  },
  description: {
    fontFamily: "WorkSans-Medium",
    fontSize: 20,
    color: colors.darkGray,
    textTransform: "capitalize",
    marginVertical: 6,
  },
  temperature: {
    fontFamily: "WorkSans-ExtraLight",
    fontSize: 100,
    color: colors.darkGray,
    flexDirection: "row",
    marginTop: -40,
  },
  temperatureContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  weatherUnit: {
    fontSize: 60,
    fontFamily: "WorkSans-ExtraLight",
    top: -20,
    color: colors.darkGray,
  },
});
