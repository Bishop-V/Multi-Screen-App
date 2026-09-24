import { Text, View, StyleSheet } from "react-native";
import InfoCard from "@/components/InfoCard";
import Nav from "@/components/Nav";
import ArticleImage from "@/components/ArticleImage";
import SyncCard from "@/components/SyncCard";
import global, { useColorMode } from "@/styles/global";
export default function Saved() {
  const c = useColorMode();
  return (
    <View>
      <SyncCard />
    </View>
  );
}

const styles = StyleSheet.create({});
