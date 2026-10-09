import { useColorMode } from "@/styles/global";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";
import global from "@/styles/global";

type Props = {
  showMic?: boolean;
};

export default function SearchPageBar({ showMic = true }: Props) {
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

      {showMic && (
        <Ionicons name="mic" style={[global.icon, { color: c.sym }]}></Ionicons>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    paddingHorizontal: "2%",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 19,
    borderWidth: 2,
  },
  searchBarLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: "5%",
  },
});
