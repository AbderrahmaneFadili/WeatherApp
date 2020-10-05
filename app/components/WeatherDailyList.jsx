import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import WeatherCard from "./WeatherCard";
import moment from "moment";
import { getCurrentWeatherIcon } from "../Utils/utils";

const WeatherDailyList = ({ dailyWeather }) => {
  //return modified data
  const DailyList = dailyWeather.map((w) => {
    const { icon, main } = w.weather[0];
    return {
      temperature: `${Math.round(w.temp.min)}°/${Math.round(w.temp.max)}°`,
      day: moment(w.dt * 1000)
        .format("dd")
        .toUpperCase(),
      weatherIcon: getCurrentWeatherIcon(main, icon, 40),
    };
  });

  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={DailyList}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({ item: { temperature, day, weatherIcon } }) => (
          <WeatherCard temperature={temperature} day={day} icon={weatherIcon} />
        )}
      />
    </View>
  );
};

export default WeatherDailyList;

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    marginBottom: 10,
  },
});
