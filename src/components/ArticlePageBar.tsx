import { useColorMode } from "@/styles/global";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";
import global from "@/styles/global";
export default function ArticlePageBar() {
  const c = useColorMode();

  return (
    <View
      style={[
        styles.searchBar,
        { backgroundColor: c.card, borderColor: c.cardBorder },
      ]}
    >
      <View style={[styles.searchBarLeft]}>
        <Ionicons
          name="search-outline"
          style={[global.icon, { color: c.sym }]}
        ></Ionicons>
        <Text style={[global.text, { color: c.sym }]}>Search Wikipedia</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    paddingHorizontal: "2%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 19,
    borderWidth: 2,
    width: "100%",
  },
  searchBarLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: "5%",
  },
});
