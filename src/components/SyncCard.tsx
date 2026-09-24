import {
  Text,
  View,
  StyleSheet,
  useColorScheme,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import global, { useColorMode } from "@/styles/global";

export default function SyncCard() {
  const isDark = useColorScheme() === "dark";
  const c = useColorMode();
  return (
    <View
      style={[
        styles.card,
        { backgroundColor: c.bg },
        !isDark && { boxShadow: "0 10px 8px rgba(0, 0, 0, 0.15)" },
      ]}
    >
      <Ionicons
        name="sync-outline"
        style={[global.iconLarge, { color: c.sym, alignSelf: "center" }]}
      />

      <Text
        style={[
          {
            color: c.sym,
            flex: 1,
          },
          global.title,
        ]}
      >
        Sync collections
      </Text>

      <Text style={[{ color: c.sym, flex: 1 }, global.text]}>
        Collections can now be synced across devices. Log in to your Wikipedia
        account and allow your collections to be saved.
      </Text>

      <View>
        <Pressable>
          <Text>Log in/join Wikipedia</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 30,
    padding: 24,
    gap: 5,
    marginVertical: "3%",
    flexDirection: "column",
  },
});
