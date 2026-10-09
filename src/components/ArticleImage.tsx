import { View, Image, StyleSheet, Pressable, Text } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { handlePress } from "@/actions";
import global, { useColorMode } from "@/styles/global";
type Props = {
  title: string;
  subtitle: string;
  summary: string;
};

export default function ArticleImage({ title, subtitle, summary }: Props) {
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
          <View style={[styles.articleBrief, { backgroundColor: c.bgTrans }]}>
            <Text style={[global.title2, { color: c.sym }]}>{title}</Text>
            <Text style={[global.date, { color: c.sym }]}>{subtitle}</Text>
            <Text style={[global.text, { color: c.sym }]} numberOfLines={4}>
              {summary}
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
  articleBrief: {
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
