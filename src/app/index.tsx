import { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Nav, { PageName } from "@/components/Nav";
import Home from "@/screens/Home";
import Saved from "@/screens/Saved";
import Search from "@/screens/Search";
import Activity from "@/screens/Activity";
import More from "@/screens/More";
import HomeHeader from "@/components/HomeHeader";
import SavedHeader from "@/components/SavedHeader";
import SearchHeader from "@/components/SearchHeader";
import ActivityHeader from "@/components/ActivityHeader";
import MoreHeader from "@/components/MoreHeader";
import { useColorMode } from "@/styles/global";

export default function Index() {
  const pages = { Home, Saved, Search, Activity, More };
  const headers = {
    Home: HomeHeader,
    Saved: SavedHeader,
    Search: SearchHeader,
    Activity: ActivityHeader,
    More: MoreHeader,
  };
  const [page, setPage] = useState<PageName>("Home");
  const Page = pages[page];
  const Header = headers[page];

  const c = useColorMode();

  return (
    <SafeAreaView style={[styles.main, { backgroundColor: c.bg }]}>
      <Header />
      <ScrollView key={page} style={styles.page}>
        <Page />
      </ScrollView>
      <Nav onNavigate={setPage} current={page} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  page: {
    paddingHorizontal: "4%",
  },
});
