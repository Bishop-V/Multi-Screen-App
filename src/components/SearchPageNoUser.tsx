import { useColorMode } from "@/styles/global";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";
import global from "@/styles/global";
export default function SearchPageNoUser() {
  const c = useColorMode();

  return (
    <View style={[styles.main]}>
      <Ionicons
        name="timer-outline"
        style={[global.iconExtraLarge, { color: c.sym }]}
      ></Ionicons>
      <Text style={[global.text, global.title2, { color: c.sym }]}>
        No recently viewed articles
      </Text>
      <Text style={[global.text, { color: c.sym }]}>
        Track what you've been reading here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
  },
});
