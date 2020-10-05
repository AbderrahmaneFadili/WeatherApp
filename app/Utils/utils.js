import React from "react";

//weather icon
import Moon from "../assets/weather-night-icons/Clear/moon.svg";
import Sun from "../assets/weather-day-icons/Clear/sun.svg";
import Snow from "../assets/weather-day-icons/Snow/snowflake.svg";
import Drizzle from "../assets/weather-day-icons/Drizzle/drizzle.svg";
import Rain from "../assets/weather-day-icons/Rain/rain.svg";
import Storm from "../assets/weather-day-icons/Storm/storm.svg";
import Mist from "../assets/weather-day-icons/mist.svg";
import Clouds from "../assets/weather-day-icons/Clouds/cloud.svg";

const getCurrentWeatherIcon = (main, icon, size) => {
  switch (main) {
    case "Clear":
      return icon[icon.length - 1] === "d" ? (
        <Sun width={size} height={size} />
      ) : (
        <Moon width={size} height={size} />
      );
    case "Thunderstorm":
      return <Storm width={size} height={size} />;
    case "Drizzle":
      return <Drizzle width={size} height={size} />;
    case "Rain":
      return <Rain width={size} height={size} />;
    case "Snow":
      return <Snow width={size} height={size} />;
    case "Clouds":
      return <Clouds width={size} height={size} />;
    default:
      return <Mist width={size} height={size} />;
  }
};

export { getCurrentWeatherIcon };
