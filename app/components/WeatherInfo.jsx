import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const WeatherInfo = ({ humidity, windSpeed, pressure }) => {
  return (
    <View style={styles.weatherInfoContainer}>
      {/* info */}
      <View style={styles.info}>
        <Ionicons name="ios-water" size={30} color={colors.darkGray} />
        <Text style={styles.value}>{`${humidity} %`}</Text>
      </View>
      {/* info */}
      <View style={styles.info}>
        <MaterialCommunityIcons
          name="weather-windy"
          size={30}
          color={colors.darkGray}
        />
        <Text style={styles.value}>{`${windSpeed} m/s`}</Text>
      </View>
      {/* info */}
      <View style={styles.info}>
        <MaterialCommunityIcons
          name="speedometer"
          size={30}
          color={colors.darkGray}
        />
        <Text style={styles.value}>{`${pressure} hPa`}</Text>
      </View>
    </View>
  );
};

export default WeatherInfo;

const styles = StyleSheet.create({
  weatherInfoContainer: {
    flex: 0.3,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    width: WIDTH * 0.7,
  },
  value: {
    color: colors.darkGray,
    fontSize: 17,
  },
  info: {
    alignItems: "center",
  },
});
