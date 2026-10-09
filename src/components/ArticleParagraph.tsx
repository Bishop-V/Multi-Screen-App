import { Text, View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import global, { useColorMode } from "@/styles/global";

type Props = {
  children: string;
};

export default function ArticleParagraph({ children }: Props) {
  const c = useColorMode();
  return (
    <View style={styles.textBlock}>
      <Text style={[global.articleText, styles.text, { color: c.sym }]}>
        {children}
      </Text>
      <Pressable>
        <Ionicons
          name="pencil"
          style={[global.icon, { color: c.sym }]}
        ></Ionicons>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  textBlock: {
    flexDirection: "row",
    justifyContent: "center",
    padding: "3%",
  },
  text: {
    flex: 1,
  },
});
