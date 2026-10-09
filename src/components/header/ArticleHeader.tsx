import { StyleSheet, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchPageBar from "../SearchPageBar";
import { router } from "expo-router";
import global, { useColorMode } from "@/styles/global";

export function ArticleHeader() {
  const c = useColorMode();
  return (
    <View style={styles.main}>
      <Pressable onPress={() => router.back()}>
        <Ionicons name="arrow-back" style={[global.icon, { color: c.sym }]} />
      </Pressable>
      <View style={styles.search}>
        <SearchPageBar showMic={false} />
      </View>
      <Ionicons
        name="grid-outline"
        style={[global.icon, { color: c.sym }]}
      ></Ionicons>
      <Ionicons
        name="menu-outline"
        style={[global.icon, { color: c.sym }]}
      ></Ionicons>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 8,
  },
  search: {
    flex: 1,
  },
});
