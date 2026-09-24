import { StyleSheet, useColorScheme } from "react-native";
import { useState } from "react";

const global = StyleSheet.create({
  icon: {
    fontSize: 30,
  },
});

export default global;

export function useColorMode() {
  const isDark = useColorScheme() === "dark";
  return {
    bg: isDark ? "#202122" : "#FFFFFF",
    sym: isDark ? "#FBFBFB" : "#000000",
  };
}
