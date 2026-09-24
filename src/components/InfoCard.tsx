import { Text, View, StyleSheet, Image, useColorScheme } from "react-native";
import { useColorMode } from "@/styles/global";

type Props = {
  info: string;
};

export default function InfoCard({ info }: Props) {
  const isDark = useColorScheme() === "dark";
  const c = useColorMode();
  return (
    <View
      style={[styles.card, { backgroundColor: isDark ? "#2E3136" : "#EAECF0" }]}
    >
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
          height: 60,
          width: 60,
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
    marginHorizontal: "2%",
    alignItems: "center",
    flexDirection: "row",
  },
});
