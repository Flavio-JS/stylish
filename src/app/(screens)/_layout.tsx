import { Drama, Drill, User } from "@tamagui/lucide-icons";
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
        tabBarActiveTintColor: theme.accentColor.val,
      }}
    >
      <Tabs.Screen
        name="firstScreen/index"
        options={{
          title: "firstScreen",
          tabBarIcon: () => <Drama />,
        }}
      />
      <Tabs.Screen
        name="secondScreen/index"
        options={{
          title: "secondScreen",
          tabBarIcon: () => <Drill />,
        }}
      />
      <Tabs.Screen
        name="user/index"
        options={{
          title: "User",
          tabBarIcon: () => <User />,
        }}
      />
    </Tabs>
  );
}
