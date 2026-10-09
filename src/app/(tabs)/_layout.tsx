import { View, StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import global, { theme, useColorMode } from "@/styles/global";
import { Ionicons } from "@expo/vector-icons";
import {
  HomeHeaderTitle,
  HomeHeaderRight,
} from "@/components/header/HomeHeader";
import { SavedHeaderRight } from "@/components/header/SavedHeader";
export default function RootLayout() {
  const c = useColorMode();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.select,

        tabBarInactiveTintColor: c.sym,
        headerStatusBarHeight: 20,
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: c.bg,
          borderTopWidth: 0.2,
          justifyContent: "center",
          height: 75,
        },
        headerStyle: { backgroundColor: c.bg },
        sceneStyle: { paddingHorizontal: 16, backgroundColor: c.bg },
        headerTitleStyle: {
          color: c.sym,
        },
      }}
    >
      <Tabs.Screen
        name="Index"
        options={{
          title: "Home",
          headerTitle: () => <HomeHeaderTitle />,

          headerRight: () => <HomeHeaderRight />,

          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.focusPill, focused && styles.focusHighlight]}>
              <Ionicons
                name={focused ? "home" : "home-outline"}
                style={global.icon}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Saved"
        options={{
          title: "Saved",
          headerRight: () => <SavedHeaderRight />,
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.focusPill, focused && styles.focusHighlight]}>
              <Ionicons
                name={focused ? "bookmark" : "bookmark-outline"}
                style={global.icon}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.focusPill, focused && styles.focusHighlight]}>
              <Ionicons
                name={focused ? "search" : "search-outline"}
                style={global.icon}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Activity"
        options={{
          title: "Activity",
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.focusPill, focused && styles.focusHighlight]}>
              <Ionicons
                name={focused ? "timer" : "timer-outline"}
                style={global.icon}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="More"
        options={{
          title: "More",
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.focusPill, focused && styles.focusHighlight]}>
              <Ionicons
                name={focused ? "menu" : "menu-outline"}
                style={global.icon}
                color={color}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  focusHighlight: {
    backgroundColor: theme.selectBG,
  },
  focusPill: {
    width: 60,
    height: 30,
    borderRadius: 99,
    justifyContent: "center",
    alignItems: "center",
  },
});
