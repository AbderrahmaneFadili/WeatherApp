import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

const WeatherCard = ({ day, icon, temperature }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.day}>{day}</Text>
      <View>{icon}</View>
      <Text style={styles.tmp}>{temperature}</Text>
    </View>
  );
};

export default WeatherCard;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
    width: 100,
    borderRadius: 7,
    marginLeft: 10,
  },
  day: {
    fontFamily: "WorkSans-Medium",
    fontSize: 17,
    color: colors.darkGray,
    marginBottom: 8,
  },
  tmp: {
    fontFamily: "WorkSans-Light",
    fontSize: 18,
    color: colors.darkGray,
  },
});
