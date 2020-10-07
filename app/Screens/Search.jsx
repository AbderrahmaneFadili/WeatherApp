import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import SearchInput from "../components/SearchInput";
import WeatherButton from "../components/WeatherButton";
import colors from "../config/colors";
//Formik & Yup for handling the search form data
import { Formik } from "formik";
import * as Yup from "yup";
import { AdMobBanner } from "expo-ads-admob";
//Search Input Validation Schema using "Yup"
const SearchValidationSchema = Yup.object().shape({
  search: Yup.string().required("Please enter the city name"),
});

const Search = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      {/*Handle the form data (change value , submit , blur ) using Formik */}

      <Formik
        initialValues={{
          search: "",
        }}
        onSubmit={(values) => {
          navigation.navigate("Home", {
            cityName: values.search,
          });
        }}
        validationSchema={SearchValidationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.searchContainer}>
            <SearchInput
              onChangeText={handleChange("search")}
              onBlur={handleBlur("search")}
              placeholder={"City Name"}
              value={values.search}
            />
            {errors.search && <Text style={styles.error}>{errors.search}</Text>}
            <WeatherButton onPress={handleSubmit} title={"Search"} />
          </View>
        )}
      </Formik>
      <AdMobBanner
        bannerSize="smartBannerLandscape"
        adUnitID="ca-app-pub-4876867144671888/4528833023"
      />
    </Screen>
  );
};

export default Search;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightGray,
    flex: 1,
  },
  searchContainer: {
    padding: 15,
  },
  error: {
    marginTop: 8,
    fontFamily: "WorkSans-Medium",
    color: colors.danger,
  },
  form: {
    flex: 1,
  },
});
