import { View, StyleSheet, Pressable, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import global, { useColorMode } from "@/styles/global";

const tabs = [
  { icon: "home-outline", label: "Home" },
  { icon: "bookmark-outline", label: "Saved" },
  { icon: "search-outline", label: "Search" },
  { icon: "timer-outline", label: "Activity" },
  { icon: "menu-outline", label: "More" },
] as const;

export type PageName = (typeof tabs)[number]["label"];

type Props = {
  current: PageName;
  onNavigate: (page: PageName) => void;
};

export default function Nav({ current, onNavigate }: Props) {
  const c = useColorMode();
  return (
    <View style={styles.nav}>
      {tabs.map((tab) => {
        const isCurrent = tab.label === current;
        return (
          <Pressable
            key={tab.label}
            onPress={() => onNavigate(tab.label)}
            style={{
              alignItems: "center",
            }}
          >
            <Ionicons
              key={tab.label}
              name={tab.icon}
              style={[
                global.icon,
                isCurrent
                  ? [styles.current, styles.currentIcon]
                  : { color: c.sym },

                {
                  paddingVertical: 5,
                  paddingHorizontal: 30,
                  borderRadius: 90,
                },
              ]}
            />
            <Text style={[isCurrent ? styles.current : { color: c.sym }]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
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
    backgroundColor: "#6699FF33",
  },
});
