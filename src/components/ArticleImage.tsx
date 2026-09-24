import { View, Image, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { handlePress } from "@/actions";
import global, { useColorMode } from "@/styles/global";
export default function ArticleImage() {
  const c = useColorMode();
  return (
    <View style={styles.main}>
      <View style={styles.wrap}>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconBackground: {
    backgroundColor: "#27292D",
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
  image: {
    borderRadius: 25,
    resizeMode: "cover",
    aspectRatio: 1,
    height: undefined,
    width: "100%",
  },
});
