import { weatherAPI_Key } from "../Keys/key";

//get weather data by coord
const getWeatherDatabyCoord = async (latitude, longitude) => {
  try {
    const weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${weatherAPI_Key}`
    )
      .then((r) => r.json())
      .then((value) => value);
    const { lat, lon } = weather.coord;
    const dailyWeather = await getDailyForecastByCoord(lat, lon);
    return {
      weatherData: weather,
      dailyWeatherData: dailyWeather,
    };
  } catch (err) {
    return err;
  }
};

//get Daily Forecast by coord
const getDailyForecastByCoord = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${weatherAPI_Key}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

// get Weather Data By city
const getWeatherDataByCity = async (cityName) => {
  try {
    const weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${weatherAPI_Key}`
    )
      .then((r) => r.json())
      .then((value) => value);

    const { lat, lon } = weather.coord;
    const dailyWeather = await getDailyForecastByCoord(lat, lon);
    return {
      weatherData: weather,
      dailyWeatherData: dailyWeather,
    };
  } catch (error) {
    return err;
  }
};

export { getWeatherDatabyCoord, getWeatherDataByCity };
