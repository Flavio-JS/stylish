import { XStack } from "tamagui";
import { Sun, Moon } from "@tamagui/lucide-icons";

export type ChangeThemeProps = {
  isDarkTheme: boolean;
  onClick: () => void;
};

export const ChangeTheme = ({ isDarkTheme, onClick }: ChangeThemeProps) => {
  return (
    <XStack
      ai="center"
      gap="$2"
      position="absolute"
      right="$3"
      top="$11"
      zIndex={2}
    >
      {isDarkTheme ? (
        <Sun onTouchStart={onClick} />
      ) : (
        <Moon onTouchStart={onClick} />
      )}
    </XStack>
  );
};
