import React, { useEffect, useReducer, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, Alert, View } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Header from "../components/header";
import CurrentWeather from "../components/CurrentWeather";
import WeatherDailyList from "../components/WeatherDailyList";
import { getWeatherDatabyCoord, getWeatherDataByCity } from "../api/index";
import * as Location from "expo-location";
import { getCurrentWeatherIcon } from "../Utils/utils";
import moment from "moment";
import { MaterialIcons } from "@expo/vector-icons";
import WeatherButton from "../components/WeatherButton";
import WeatherInfo from "../components/WeatherInfo";

//initial State
const initialState = {
  loading: false,
  weatherData: null,
  dailyWeatherData: null,
  fetch_error: false,
};

//actions constants
const LOADING_FETCH_WEATHER = "LOADING_FETCH_WEATHER";
const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";

//weatherReducer Reducer
const weatherReducer = (state, action) => {
  switch (action.type) {
    case LOADING_FETCH_WEATHER:
      return {
        ...state,
        loading: true,
        fetch_error: false,
        weatherData: null,
        dailyWeatherData: null,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        fetch_error: false,
        weatherData: action.weatherData,
        dailyWeatherData: action.dailyWeatherData,
      };

    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        fetch_error: true,
        dailyWeatherData: null,
        weatherData: null,
      };
    default:
      return state;
  }
};

const Home = ({ navigation, route }) => {
  //useReducer hook for state management
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  //useEffect
  useEffect(() => {
    //request Permissions
    Location.requestPermissionsAsync().then((permissionRes) => {
      permissionRes.status !== "granted"
        ? Alert.alert("Permission to access location was denied")
        : null;
    });

    //Get Weather current data depend on current location
    getWeatherData(route);
    /* the useEffect callBack function ()=>{} will be recalled after route.params changed  */
  }, [route.params]);

  const getWeatherData = (route) => {
    //fetch data loading equal to false
    dispatch({ type: LOADING_FETCH_WEATHER });
    //get Current Device Location using Location API
    Location.getCurrentPositionAsync().then((l) => {
      //get weather data using current device location
      let { latitude, longitude } = l.coords;
      if (route.params === undefined) {
        getWeatherDatabyCoord(latitude, longitude)
          .then(({ weatherData, dailyWeatherData }) => {
            dispatch({
              type: FETCH_WEATHER_SUCCESS,
              weatherData,
              dailyWeatherData,
            });
          })
          .catch((err) => dispatch({ type: FETCH_ERROR }));
      } else {
        //get weather data using city name from route.params property
        getWeatherDataByCity(route.params.cityName)
          .then(({ weatherData, dailyWeatherData }) => {
            dispatch({
              type: FETCH_WEATHER_SUCCESS,
              weatherData,
              dailyWeatherData,
            });
          })
          .catch((err) => dispatch({ type: FETCH_ERROR }));
      }
    });
  };

  const { loading, weatherData, dailyWeatherData, fetch_error } = state;
  return (
    <Screen style={styles.screen}>
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator color={colors.darkGray} size={80} />
        </View>
      )}
      {weatherData && (
        <>
          <Header
            title={weatherData.name}
            iconLeft="refresh"
            iconRight="search"
            iconLeftPress={() => {
              if (fetch_error) {
                route.params = undefined;
                getWeatherData(route);
              } else {
                getWeatherData(route);
              }
            }}
            iconRightPress={() => navigation.navigate("Search")}
          />

          <CurrentWeather
            date={moment(weatherData.dt * 1000)
              .format("dddd D MMMM")
              .toUpperCase()}
            icon={getCurrentWeatherIcon(
              weatherData.weather[0].main,
              weatherData.weather[0].icon,
              100
            )}
            description={weatherData.weather[0].description}
            temperature={Math.round(weatherData.main.temp)}
          />
          <WeatherInfo
            humidity={weatherData.main.humidity}
            pressure={weatherData.main.pressure}
            windSpeed={weatherData.wind.speed}
          />
        </>
      )}
      {dailyWeatherData && (
        <WeatherDailyList dailyWeather={dailyWeatherData.daily} />
      )}
      {fetch_error && (
        <View style={styles.Error}>
          <MaterialIcons name="error" size={60} color={colors.darkGray} />
          <Text style={styles.errorText}>
            Please enter a correct city name , or check the internet connecting.
          </Text>
          <WeatherButton
            title="Current location weather"
            onPress={() => {
              //route = "" for showing  just the current weather
              route.params = undefined;
              getWeatherData(route);
            }}
          />
        </View>
      )}
    </Screen>
  );
};
export default Home;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightGray,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Error: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 20,
  },
  errorText: {
    fontSize: 20,
    fontFamily: "WorkSans-Medium",
    color: colors.darkGray,
    textAlign: "center",
    marginVertical: 20,
  },
});
