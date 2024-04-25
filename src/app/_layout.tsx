import { TamaguiProvider, Theme, YStack } from "tamagui";
import tamaguiConfig from "../../tamagui.config";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { StatusBar as RNStatusBar } from "react-native";
import { ChangeTheme } from "@/components/ChangeTheme/ChangeTheme";
import { useState } from "react";

export default function Layout() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Theme name={isDarkTheme ? "dark" : "light"}>
        <StatusBar style={isDarkTheme ? "light" : "dark"} />
        <YStack
          flex={1}
          bg="$background"
          pt={RNStatusBar.currentHeight}
          position="relative"
        >
          <ChangeTheme
            isDarkTheme={isDarkTheme}
            onClick={() => setIsDarkTheme(!isDarkTheme)}
          />
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
              name="sign-up"
              options={{ headerShown: false, headerStyle: {} }}
            />
            <Stack.Screen
              name="forgot-password"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="create-new-password"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="(screens)"
              options={{
                title: "Screens",
                headerShown: false,
              }}
            />
          </Stack>
        </YStack>
      </Theme>
    </TamaguiProvider>
  );
}
