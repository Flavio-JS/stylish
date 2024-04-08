import { TamaguiProvider, Theme, YStack } from "tamagui";
import tamaguiConfig from "../../tamagui.config";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

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
      <Theme name="dark">
        <StatusBar style="dark" />
        <YStack flex={1} bg="$background">
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
