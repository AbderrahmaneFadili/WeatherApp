import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import colors from "../config/colors";

const Header = ({
  title,
  iconLeft,
  iconRight,
  iconLeftPress = null,
  iconRightPress = null,
}) => {
  return (
    <View style={styles.headerContainer}>
      {iconLeft && (
        <TouchableOpacity onPress={iconLeftPress}>
          <MaterialCommunityIcons
            size={35}
            name={iconLeft}
            color={colors.darkGray}
            onPress={iconLeftPress}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {iconRight && (
        <TouchableOpacity onPress={iconRightPress}>
          <Feather name={iconRight} size={35} color={colors.darkGray} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: colors.darkGray,
    textAlign: "center",
    fontFamily: "WorkSans-Medium",
  },
});
