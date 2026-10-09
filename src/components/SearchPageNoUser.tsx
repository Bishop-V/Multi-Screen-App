import { useColorMode } from "@/styles/global";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";
import global from "@/styles/global";
type Props = {
  title: string;
  text: string;
};

export default function SearchPageNoUser({ title, text }: Props) {
  const c = useColorMode();

  return (
    <View style={[styles.main]}>
      <Ionicons
        name="timer-outline"
        style={[global.iconExtraLarge, { color: c.sym }]}
      ></Ionicons>
      <Text style={[global.text, global.title2, { color: c.sym }]}>
        {title}
      </Text>
      <Text style={[global.text, { color: c.sym }]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
  },
});
