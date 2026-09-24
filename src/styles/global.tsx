import { StyleSheet, useColorScheme } from "react-native";
import { useState } from "react";

const global = StyleSheet.create({
  icon: {
    fontSize: 25,
  },
  iconLarge: {
    fontSize: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: "900",
    marginVertical: "1%",
  },
  text: {
    fontSize: 15,
    fontWeight: "200",
    marginVertical: "1%",
    lineHeight: 25,
  },
  date: {
    fontSize: 15,
    fontWeight: "700",
    marginVertical: "1%",
  },
});

export default global;

export function useColorMode() {
  const isDark = useColorScheme() === "dark";
  return {
    bg: isDark ? "#202122" : "#FFFFFF",
    sym: isDark ? "#FBFBFB" : "#000000",
    card: isDark ? "#2E3136" : "#EAECF0",
  };
}
