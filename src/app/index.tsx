import { Text, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Nav from "../components/Nav";
import ArticleImage from "../components/ArticleImage";
import global from "@/styles/global";
export default function Index() {
  return (
    <SafeAreaView style={styles.main}>
      <Header />
      <ScrollView>
        <InfoCard info="Content and resources selected by and about the Wikimedia community" />

        <View style={styles.body}>
          <Text style={[styles.textDate, global.text]}>
            Today - Sep 16, 2026
          </Text>
          <Text style={[styles.textTitle, global.text]}>Featured Article</Text>
          <Text style={[styles.textDesc, global.text]}>
            Featured articles are some of the highest-quality articles on
            Wikipedia, selected daily by editors
          </Text>
        </View>
        <ArticleImage />
      </ScrollView>
      <Nav />
    </SafeAreaView>
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
