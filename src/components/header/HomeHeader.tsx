import {
  StyleSheet,
  Image,
  View,
  Pressable,
  Appearance,
  useColorScheme,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import global, { useColorMode } from "@/styles/global";

export function HomeHeaderTitle() {
  const c = useColorMode();
  return (
    <Image
      style={[
        styles.homeWordmark,
        {
          tintColor: c.sym,
        },
      ]}
      source={require("../../assets/wordmark.png")}
    />
  );
}
export function HomeHeaderRight() {
  const c = useColorMode();
  const isDark = useColorScheme() === "dark";
  return (
    <View style={global.iconHeaderRow}>
      <Pressable
        onPress={() => Appearance.setColorScheme(isDark ? "light" : "dark")}
      >
        {/* light/dark mode switch button */}

        <Ionicons
          name={isDark ? "moon-outline" : "sunny-outline"}
          style={[global.icon, { color: c.sym }]}
        ></Ionicons>
      </Pressable>
      <Pressable>
        <Ionicons
          name="grid-outline"
          style={[global.icon, { color: c.sym }]}
        ></Ionicons>
      </Pressable>
      <Pressable>
        <Ionicons
          name="notifications-outline"
          style={[global.icon, { color: c.sym }]}
        ></Ionicons>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  homeWordmark: {
    height: 60,

    width: 140,

    resizeMode: "contain",
  },
});
