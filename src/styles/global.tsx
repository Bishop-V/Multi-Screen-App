import { StyleSheet, useColorScheme } from "react-native";
export const theme = {
  select: "#6699FF",
  selectBG: "#6699FF20",
  accent: "#A2A9B1",
};
const global = StyleSheet.create({
  icon: {
    fontSize: 20,
  },
  iconLarge: {
    fontSize: 50,
  },
  iconExtraLarge: {
    fontSize: 100,
  },

  title: {
    fontSize: 25,
    fontWeight: "900",
    marginVertical: "1%",
    marginTop: "5%",
  },
  title2: {
    fontSize: 20,
    fontWeight: "700",
    marginVertical: "1%",
    marginTop: "5%",
  },
  text: {
    fontSize: 17,
    fontWeight: "200",
    marginVertical: "1%",
    paddingVertical: "1%",
    lineHeight: 30,
  },
  articleText: {
    fontSize: 13,
    fontWeight: "200",
    marginVertical: "1%",
    paddingVertical: "1%",
    lineHeight: 25,
  },
  desc: {
    fontSize: 15,
    fontWeight: "100",

    marginVertical: "1%",
  },
  date: {
    fontSize: 15,
    fontWeight: "700",
    marginVertical: "1%",
  },
  iconHeaderRow: {
    flexDirection: "row",
    gap: 20,
  },
  subheader: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: "3%",
  },
  currentPage: {
    color: theme.select,
  },
  subheaderSelect: {
    borderColor: theme.select,
    borderRadius: 4,
    marginTop: 1,
    borderWidth: 1.4,
  },
});

export default global;

export function useColorMode() {
  const isDark = useColorScheme() === "dark";
  return {
    bg: isDark ? "#202122" : "#FFFFFF",
    bgTrans: isDark ? "#202122E6" : "#FFFFFFE6",
    sym: isDark ? "#FBFBFB" : "#000000",
    card: isDark ? "#27292D" : "#EAECF0",
    cardBorder: isDark ? "#2D2F33" : "#E6E6E7",
    cardShadow: isDark ? "" : "0 10px 8px rgba(0, 0, 0, 0.15)",
  };
}
