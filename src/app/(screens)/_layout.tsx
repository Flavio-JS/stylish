import { Home, ShoppingCart, Sparkles, User } from "@tamagui/lucide-icons";
import { Tabs } from "expo-router";
import { XStack, useTheme } from "tamagui";

export default function Layout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          shadowColor: "transparent",
        },
        tabBarBackground: () => <XStack f={1} backgroundColor="$background" />,
        tabBarActiveTintColor: theme.red11.val,
      }}
    >
      <Tabs.Screen
        name="homeScreen/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="trendingScreen/index"
        options={{
          title: "Trending",
          tabBarIcon: ({ color }) => <Sparkles color={color} />,
        }}
      />
      <Tabs.Screen
        name="shopScreen/index"
        options={{
          title: "Shop",
          tabBarIcon: ({ color }) => <ShoppingCart color={color} />,
        }}
      />
      <Tabs.Screen
        name="profileScreen/index"
        options={{
          title: "User",
          tabBarIcon: ({ color }) => <User color={color} />,
        }}
      />
    </Tabs>
  );
}
