import { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Home from "@/screens/Home";
import Saved from "@/screens/Saved";
import Search from "@/screens/Search";
import Activity from "@/screens/Activity";
import More from "@/screens/More";
export default function Index() {
  const pages = { Home, Saved, Search, Activity, More };
  const [page, setPage] = useState("Home");
  const Page = pages[page];

  return (
    <SafeAreaView style={styles.main}>
      <Header />
      <ScrollView key={page}>
        <Page />
      </ScrollView>
      <Nav onNavigate={setPage} current={page} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#202122",
  },
});
