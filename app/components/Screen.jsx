import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

const Screen = ({ style, children }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <StatusBar style="dark" />
      {children}
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? Constants.statusBarHeight : 0,
  },
});
