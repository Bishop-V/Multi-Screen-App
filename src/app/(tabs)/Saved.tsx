import { Text, View, StyleSheet, ScrollView } from "react-native";
import InfoCard from "@/components/InfoCard";
import ArticleImage from "@/components/ArticleImage";
import SyncCard from "@/components/SyncCard";
import global, { useColorMode } from "@/styles/global";
export default function Saved() {
  const c = useColorMode();
  return (
    <ScrollView style={[styles.main, { backgroundColor: c.bg }]}>
      <SyncCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#202122",
  },
});
