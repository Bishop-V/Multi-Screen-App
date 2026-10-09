import { Text, View, StyleSheet, Image } from "react-native";
import { useColorMode } from "@/styles/global";

type Props = {
  info: string;
};

export default function InfoCard({ info }: Props) {
  const c = useColorMode();
  return (
    <View style={[styles.card, { backgroundColor: c.card }]}>
      <Text style={[styles.cardText, { color: c.sym }]}>{info}</Text>
      <Image
        source={require("../assets/logo.png")}
        style={{
          height: 50,
          width: 50,
          resizeMode: "contain",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 30,
    padding: "4%",
    gap: 5,
    marginVertical: "2%",

    alignItems: "center",
    flexDirection: "row",
  },
  cardText: {
    flex: 1,
  },
});
