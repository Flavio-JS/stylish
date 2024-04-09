import { TamaguiProvider, Theme, YStack } from "tamagui";
import tamaguiConfig from "../../tamagui.config";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { StatusBar as RNStatusBar } from "react-native";

export default function Layout() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Theme name="light">
        <StatusBar style="dark" />
        <YStack flex={1} bg="$background" pt={RNStatusBar.currentHeight}>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
              name="(screens)"
              options={{
                title: "Screens",
                headerShown: true,
              }}
            />
          </Stack>
        </YStack>
      </Theme>
    </TamaguiProvider>
  );
}
