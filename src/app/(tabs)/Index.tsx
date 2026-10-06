import { Text, View, StyleSheet, ScrollView } from "react-native";
import InfoCard from "@/components/InfoCard";
import ArticleImage from "@/components/ArticleImage";
import global, { useColorMode } from "@/styles/global";
export default function Index() {
  const c = useColorMode();
  return (
    <ScrollView style={[styles.main, { backgroundColor: c.bg }]}>
      <InfoCard info="Content and resources selected by and about the Wikimedia community" />

      <View style={styles.body}>
        <Text style={[global.date, { color: c.sym }]}>
          Today - Sep 16, 2026
        </Text>
        <Text style={[global.title, { color: c.sym }]}>Featured Article</Text>
        <Text style={[global.text, { color: c.sym }]}>
          Featured articles are some of the highest-quality articles on
          Wikipedia, selected daily by editors
        </Text>
      </View>
      <ArticleImage />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 40,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "1%",
    paddingHorizontal: "3%",
  },
  body: {
    flex: 2,
    marginHorizontal: "2%",
  },
  main: {
    flex: 1,
    backgroundColor: "#202122",
  },
});
