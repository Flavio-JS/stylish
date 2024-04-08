import { Switch, SwitchProps, XStack } from "tamagui";
import { Sun, Moon } from "@tamagui/lucide-icons";

export const ChangeTheme = ({ ...rest }: SwitchProps) => {
  return (
    <XStack ai="center" gap="$2">
      <Sun size="$2" />
      <Switch size="$3" bg="$gray6" {...rest}>
        <Switch.Thumb animation="tooltip" />
      </Switch>
      <Moon size="$2" />
    </XStack>
  );
};
