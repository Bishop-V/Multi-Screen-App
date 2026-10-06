import {
  Image,
  View,
  useColorScheme,
  Pressable,
  Appearance,
  StyleSheet,
} from "react-native";
import { Tabs } from "expo-router";
import global, { useColorMode } from "@/styles/global";
import { Ionicons } from "@expo/vector-icons";
export default function RootLayout() {
  const c = useColorMode();
  const isDark = useColorScheme() === "dark";
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#6699FF",
        tabBarInactiveTintColor: c.sym,
        tabBarStyle: {
          backgroundColor: c.bg,
        },
        headerStyle: { backgroundColor: c.bg },
      }}
    >
      <Tabs.Screen
        name="Index"
        options={{
          headerTitle: () => (
            <Image
              style={[
                styles.homeWordmark,
                {
                  tintColor: c.sym,
                },
              ]}
              source={require("../../assets/wordmark.png")}
            />
          ),
          headerRight: () => (
            <View style={styles.homeIconView}>
              <Pressable
                onPress={() =>
                  Appearance.setColorScheme(isDark ? "light" : "dark")
                }
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
          ),
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              style={global.icon}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "bookmark" : "bookmark-outline"}
              style={global.icon}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              style={global.icon}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Activity"
        options={{
          title: "Activity",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "timer" : "timer-outline"}
              style={global.icon}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="More"
        options={{
          title: "More",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "menu" : "menu-outline"}
              style={global.icon}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  homeWordmark: {
    height: 60,

    width: 190,

    resizeMode: "contain",
  },
  homeIconView: {
    flexDirection: "row",
    gap: 20,
  },
});
