import { Text, View, StyleSheet, ScrollView } from "react-native";
import InfoCard from "@/components/InfoCard";
import ArticleImage from "@/components/ArticleImage";
import global, { useColorMode } from "@/styles/global";
export default function Search() {
  const c = useColorMode();

  return (
    <ScrollView style={[styles.main, { backgroundColor: c.bg }]}>
      <InfoCard info="Content and resources selected by and about the Wikimedia community" />

      <View style={styles.body}>
        <Text style={[styles.textDate, global.text]}>Today - Sep 16, 2026</Text>
        <Text style={[styles.textTitle, global.text]}>Featured Article</Text>
        <Text style={[styles.textDesc, global.text]}>
          Featured articles are some of the highest-quality articles on
          Wikipedia, selected daily by editors
        </Text>
      </View>
      <ArticleImage />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textDate: {
    fontSize: 15,
    fontWeight: "700",
    marginVertical: "2%",
  },
  textTitle: {
    fontSize: 25,
    fontWeight: "900",
  },
  textDesc: {
    fontSize: 15,
    fontWeight: "200",
  },

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
