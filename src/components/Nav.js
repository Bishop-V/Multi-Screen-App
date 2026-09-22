import { View, StyleSheet, Pressable, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { handlePress } from "../actions";
import global from "@/styles/global";

const tabs = [
  { icon: "home-outline", label: "Home", isCurrent: true },
  { icon: "bookmark-outline", label: "Saved", isCurrent: false },
  { icon: "search-outline", label: "Search", isCurrent: false },
  { icon: "timer-outline", label: "Activity", isCurrent: false },
  { icon: "menu-outline", label: "More", isCurrent: false },
];
export default function Nav() {
  return (
    <View style={styles.nav}>
      {tabs.map((tab) => (
        <Pressable
          onPress={handlePress}
          style={{
            alignItems: "center",
          }}
        >
          <Ionicons
            key={tab.label}
            name={tab.icon}
            style={[
              global.icon,
              tab.isCurrent && styles.current,
              tab.isCurrent && styles.currentIcon,
              {
                paddingVertical: 5,
                paddingHorizontal: 30,
                borderRadius: 90,
              },
            ]}
          />
          <Text style={[tab.isCurrent && styles.current, global.text]}>
            {tab.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "6%",
    paddingVertical: "3%",
    borderTopWidth: 0.5,
    borderColor: "#2D3034",
  },
  current: {
    color: "#6699FF",
  },
  currentIcon: {
    backgroundColor: "#253656",
  },
});
