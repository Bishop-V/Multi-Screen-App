import { Stack } from "expo-router";
import { useColorMode } from "@/styles/global";
import { ArticleHeader } from "@/components/header/ArticleHeader";
export default function RootLayout() {
  const c = useColorMode();
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: c.bg },
        headerTintColor: c.sym,
        headerShadowVisible: false,
        contentStyle: { backgroundColor: c.bg },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="Article"
        options={{
          title: "",
          header: () => <ArticleHeader />,
        }}
      />
    </Stack>
  );
}
