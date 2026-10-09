import { Text, View, StyleSheet, ScrollView } from "react-native";
import global, { useColorMode } from "@/styles/global";
export default function Activity() {
  const c = useColorMode();
  return (
    <ScrollView style={[styles.main, { backgroundColor: c.bg }]}>
      <View style={styles.body}>
        <Text style={[global.text]}>WIP</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 2,
    marginHorizontal: "2%",
  },
  main: {
    flex: 1,
  },
});
