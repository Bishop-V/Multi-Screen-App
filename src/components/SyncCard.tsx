import { Text, View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import global, { theme, useColorMode } from "@/styles/global";

export default function SyncCard() {
  const c = useColorMode();
  return (
    <View
      style={[styles.card, { backgroundColor: c.bg, boxShadow: c.cardShadow }]}
    >
      <Ionicons
        name="sync-outline"
        style={[global.iconLarge, styles.cardIcon, { color: c.sym }]}
      />

      <Text style={[{ color: c.sym }, global.title]}>Sync collections</Text>

      <Text style={[{ color: c.sym }, global.text]}>
        Collections can now be synced across devices. Log in to your Wikipedia
        account and allow your collections to be saved.
      </Text>

      <View style={styles.syncCardButtons}>
        <Pressable>
          <Text style={[styles.buttonDefault, styles.button]}>
            Log in/Join Wikipedia
          </Text>
        </Pressable>
        <Pressable>
          <Text style={[styles.button]}>Not now</Text>
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
  cardIcon: {
    alignSelf: "center",
  },
  buttonDefault: {
    color: theme.select,
    backgroundColor: theme.selectBG,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 99,
  },
  syncCardButtons: {
    flexDirection: "row",
  },
});
