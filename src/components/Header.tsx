import {
  View,
  StyleSheet,
  Image,
  Pressable,
  Text,
  Appearance,
  useColorScheme,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import global, { useColorMode } from "../styles/global";
import { handlePress, handleLongPress } from "../actions";

export default function Header() {
  const isDark = useColorScheme() === "dark";
  const c = useColorMode();
  return (
    <View style={styles.header}>
      <View style={styles.row}>
        <Image
          style={{
            height: 60,

            width: 230,

            resizeMode: "contain",
            tintColor: c.sym,
          }}
          source={require("../assets/wordmark.png")}
        />

        <View
          style={{
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Pressable
            onPress={() => Appearance.setColorScheme(isDark ? "light" : "dark")}
          >
            {/* light/dark mode switch button */}

            <Ionicons
              name={isDark ? "moon-outline" : "sunny-outline"}
              style={[global.icon, { color: c.sym }]}
            ></Ionicons>
          </Pressable>
          <Pressable onPress={handlePress}>
            <Ionicons
              name="grid-outline"
              style={[global.icon, { color: c.sym }]}
            ></Ionicons>
          </Pressable>
          <Pressable onPress={handlePress}>
            <Ionicons
              name="notifications-outline"
              style={[global.icon, { color: c.sym }]}
            ></Ionicons>
          </Pressable>
        </View>
      </View>
      <View style={styles.row}>
        {/* community/for you */}
        <View
          style={{
            flexDirection: "row",
            gap: 40,
          }}
        >
          <Pressable onPress={handlePress} onLongPress={handleLongPress}>
            <Text style={styles.currentPage}>Community</Text>
            {/* underline */}
            <View
              style={{
                borderColor: "#6699FF",
                borderRadius: 4,
                marginTop: 1,
                borderWidth: 1.4,
              }}
            />
          </Pressable>
          <Pressable onPress={handlePress} onLongPress={handleLongPress}>
            <Text style={[styles.page, { color: c.sym }]}>For you</Text>
          </Pressable>
        </View>
        {/* language */}
        <Pressable onPress={handlePress}>
          <Ionicons
            name="language-outline"
            style={[global.icon, { color: c.sym }]}
          ></Ionicons>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  currentPage: {
    color: "#6699FF",
  },
  page: {},
  header: {
    flexDirection: "column",
    width: "100%",
    gap: 20,
    marginVertical: "1%",
    paddingHorizontal: "3%",
  },
  row: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
