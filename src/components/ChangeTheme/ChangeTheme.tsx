import { Switch, SwitchProps, XStack } from "tamagui";
import { Sun, Moon } from "@tamagui/lucide-icons";

export const ChangeTheme = ({ ...rest }: SwitchProps) => {
  return (
    <XStack
      ai="center"
      gap="$2"
      position="absolute"
      right="$3"
      top="$11"
      zIndex={2}
    >
      <Sun size="$3.5" />
      <Switch size="$3.5" bg="$gray6" {...rest}>
        <Switch.Thumb animation="tooltip" />
      </Switch>
      <Moon size="$3.5" />
    </XStack>
  );
};
