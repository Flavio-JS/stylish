import { ArrowLeft, LogOut } from "@tamagui/lucide-icons";
import { router } from "expo-router";
import { BackHandler } from "react-native";
import { View } from "tamagui";

export default function BackPage() {
  const handleTouch = () => {
    router.canGoBack() ? router.back() : BackHandler.exitApp();
  };

  return (
    <View position="absolute" zIndex={2} left={-27} top={15}>
      {router.canGoBack() ? (
        <ArrowLeft onTouchStart={handleTouch} />
      ) : (
        <LogOut rotateY={`180deg`} onTouchStart={handleTouch} />
      )}
    </View>
  );
}
