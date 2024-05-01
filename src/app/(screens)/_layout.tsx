import { Flame, Home, ShoppingCart, User } from "@tamagui/lucide-icons";
import { Tabs } from "expo-router";
import { useTheme } from "tamagui";

export default function Layout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          shadowColor: "transparent",
          backgroundColor: theme.background.val,
        },
        tabBarActiveTintColor: theme.red11.val,
      }}
    >
      <Tabs.Screen
        name="homeScreen/index"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Home
              color={color}
              top={focused ? -15 : 0}
              size={focused ? size * 1.5 : size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="trendingScreen/index"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Flame
              color={color}
              top={focused ? -15 : 0}
              size={focused ? size * 1.5 : size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="shopScreen/index"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <ShoppingCart
              color={color}
              top={focused ? -15 : 0}
              size={focused ? size * 1.5 : size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profileScreen/index"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <User
              color={color}
              top={focused ? -15 : 0}
              size={focused ? size * 1.5 : size}
            />
          ),
        }}
      />
    </Tabs>
  );
}
