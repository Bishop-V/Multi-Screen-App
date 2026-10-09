import { View, Image, StyleSheet, Pressable, Text } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { handlePress } from "@/actions";
import global, { useColorMode } from "@/styles/global";
export default function ArticleImage() {
  const c = useColorMode();
  return (
    <View style={styles.main}>
      <Link href="/Article" asChild>
        <Pressable style={styles.wrap}>
          <Image
            style={styles.image}
            source={require("../assets/featured.jpg")}
          ></Image>
          <View style={styles.actions}>
            <Pressable
              onPress={handlePress}
              style={[styles.iconBackground, { backgroundColor: c.bg }]}
            >
              <Ionicons
                name="bookmark-outline"
                style={[global.icon, { color: c.sym }]}
              ></Ionicons>
            </Pressable>
            <Pressable
              onPress={handlePress}
              style={[styles.iconBackground, { backgroundColor: c.bg }]}
            >
              <Ionicons
                name="share-social-outline"
                style={[global.icon, { color: c.sym }]}
              ></Ionicons>
            </Pressable>
          </View>
          <View style={[styles.ArticleBrief, { backgroundColor: c.bgTrans }]}>
            <Text style={[global.title2, { color: c.sym }]}>
              Sinking of the Virgo Transport 8
            </Text>
            <Text style={[global.date, { color: c.sym }]}>
              2026 ferry disaster in Indonesia
            </Text>
            <Text style={[global.text, { color: c.sym }]} numberOfLines={4}>
              On 13 September 2026, the Indonesian-flagged ferry Virgo Transport
              8 capsized and sank in the Java Sea. The ferry was travelling from
              Surabaya, East Java to Banjarmasin, South Kalimantan, carrying 243
              people and 89 vehicles.
            </Text>
          </View>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  iconBackground: {
    borderRadius: 999,
    width: 37,
    height: 37,
    alignItems: "center",
    justifyContent: "center",
  },
  wrap: {
    position: "relative",
  },
  main: {
    marginVertical: "2%",
  },
  actions: {
    position: "absolute",
    flexDirection: "row",
    top: 20,
    right: 20,
    gap: 20,
  },
  ArticleBrief: {
    position: "absolute",
    left: 12,
    right: 12,
    bottom: 12,
    borderRadius: 12,
    padding: 16,
  },
  image: {
    borderRadius: 25,
    resizeMode: "cover",
    aspectRatio: 1,
    height: undefined,
    width: "100%",
  },
});
