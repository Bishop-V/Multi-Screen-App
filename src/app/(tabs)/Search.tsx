import { Text, View, StyleSheet } from "react-native";
import global, { useColorMode } from "@/styles/global";
import SearchPageBar from "@/components/SearchPageBar";
import SearchPageNoUser from "@/components/SearchPageNoUser";
export default function Search() {
  const c = useColorMode();

  return (
    <View style={styles.main}>
      <View>
        <SearchPageBar />

        <Text style={[global.text, global.title, { color: c.sym }]}>
          History
        </Text>
      </View>
      <View style={styles.center}>
        <SearchPageNoUser
          title="No recently viewed articles"
          text="Track what you've been reading here."
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    flex: 1,
  },
});
