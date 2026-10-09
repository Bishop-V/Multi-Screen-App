import { View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import global, { useColorMode } from "@/styles/global";

export function SavedHeaderRight() {
  const c = useColorMode();
  return (
    <View style={global.iconHeaderRow}>
      <Pressable>
        <Ionicons
          name="filter-outline"
          style={[global.icon, { color: c.sym }]}
        ></Ionicons>
      </Pressable>

      <Pressable>
        <Ionicons
          name="search-outline"
          style={[global.icon, { color: c.sym }]}
        ></Ionicons>
      </Pressable>

      <Pressable>
        <Ionicons
          name="menu-outline"
          style={[global.icon, { color: c.sym }]}
        ></Ionicons>
      </Pressable>
    </View>
  );
}
