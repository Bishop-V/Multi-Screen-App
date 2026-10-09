import { View, StyleSheet } from "react-native";
import { useColorMode } from "@/styles/global";
export default function More() {
  const c = useColorMode();
  return <View style={[styles.main, { backgroundColor: c.bg }]} />;
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
