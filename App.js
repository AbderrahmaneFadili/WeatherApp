import React from "react";
//import React Navigation libraries
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./app/Screens/Home";
import Search from "./app/Screens/Search";
//App loading Font
import { AppLoading } from "expo";
import { useFonts } from "expo-font";

//get Navigator & Screen Object
const { Navigator, Screen } = createStackNavigator();

//initial App Component
export default function App() {
  const [fontsLoaded] = useFonts({
    "WorkSans-ExtraLight": require("./app/fonts/WorkSans-ExtraLight.ttf"),
    "WorkSans-SemiBold": require("./app/fonts/WorkSans-SemiBold.ttf"),
    "WorkSans-Medium": require("./app/fonts/WorkSans-Medium.ttf"),
    "WorkSans-Light": require("./app/fonts/WorkSans-Light.ttf"),
    "WorkSans-Regular": require("./app/fonts/WorkSans-Regular.ttf"),
    "WorkSans-Thin": require("./app/fonts/WorkSans-Thin.ttf"),
  });

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Navigator initialRouteName={"Home"} headerMode="none">
          <Screen name="Home" component={Home} />
          <Screen name="Search" component={Search} />
        </Navigator>
      </NavigationContainer>
    );
  } else {
    return <AppLoading />;
  }
}
