import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import InfoCard from "@/components/InfoCard";
import ArticleImage from "@/components/ArticleImage";
import global, { useColorMode } from "@/styles/global";
export default function Index() {
  const c = useColorMode();
  return (
    <View>
      <View style={global.subheader}>
        {/* community/for you */}
        <View style={styles.subheaderSubpages}>
          <Pressable>
            <Text style={global.currentPage}>Community</Text>
            {/* underline */}
            <View style={global.subheaderSelect} />
          </Pressable>
          <Pressable>
            <Text style={[{ color: c.sym }]}>For you</Text>
          </Pressable>
        </View>
        {/* language */}
        <Pressable>
          <Ionicons
            name="language-outline"
            style={[global.icon, { color: c.sym }]}
          ></Ionicons>
        </Pressable>
      </View>

      <ScrollView style={[{ backgroundColor: c.bg }]}>
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
        <ArticleImage
          title="Sinking of the Virgo Transport 8"
          subtitle="2026 ferry disaster in Indonesia"
          summary="On 13 September 2026, the Indonesian-flagged ferry Virgo Transport 8 capsized and sank in the Java Sea. The ferry was travelling from Surabaya, East Java to Banjarmasin, South Kalimantan, carrying 243 people and 89 vehicles."
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 2,
    marginHorizontal: "2%",
  },

  subheaderSubpages: {
    flexDirection: "row",
    gap: 40,
  },
});
