import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import SyncCard from "@/components/SyncCard";
import global, { useColorMode } from "@/styles/global";
export default function Saved() {
  const c = useColorMode();
  return (
    <View>
      <View style={[global.subheader, styles.subheaderSubpage]}>
        <Pressable>
          <Text style={[global.text, global.currentPage]}>All articles</Text>
          <View style={global.subheaderSelect} />
        </Pressable>
        <Pressable>
          <Text style={[global.text, { color: c.sym }]}>Collections</Text>
        </Pressable>
      </View>
      <ScrollView>
        <SyncCard />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  subheaderSubpage: {
    justifyContent: "space-around",
  },
});
