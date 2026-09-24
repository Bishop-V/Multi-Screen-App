import { Text, View, StyleSheet, Image } from "react-native";
import { useColorMode } from "@/styles/global";

type Props = {
  info: string;
};

export default function InfoCard({ info }: Props) {
  const c = useColorMode();
  return (
    <View style={[styles.card, { backgroundColor: c.card }]}>
      <Text
        style={[
          {
            color: c.sym,
            flex: 1,
          },
        ]}
      >
        {info}
      </Text>
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
    padding: 24,
    gap: 5,
    marginVertical: "3%",
    alignItems: "center",
    flexDirection: "row",
  },
});
