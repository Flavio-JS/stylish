import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TextStyle,
} from "react-native";
import { Input, XStack, YStack } from "tamagui";
import type { IconProps } from "@tamagui/helpers-icon";

export type InputIconProps = {
  control?: Control<any, any> | undefined;
  rules?:
    | Omit<
        RegisterOptions<FieldValues>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
  style?: StyleProp<TextStyle>;
  LeftIcon?: React.NamedExoticComponent<IconProps>;
  RightIcon?: React.NamedExoticComponent<IconProps>;
  inputName: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  onTouchStartLIcon?: ((event: GestureResponderEvent) => void) | undefined;
  onTouchStartRIcon?: ((event: GestureResponderEvent) => void) | undefined;
  onChangeText?: (text?: string) => void;
};

export default function InputIcon({
  control,
  rules,
  style,
  LeftIcon,
  RightIcon,
  inputName,
  secureTextEntry,
  placeholder,
  onChangeText,
  onTouchStartLIcon,
  onTouchStartRIcon,
}: InputIconProps) {
  const onChangeTextAdapted = (
    text: string,
    onChange: (...event: any[]) => void
  ) => {
    onChange(text);
    onChangeText && onChangeText(text);
  };

  return (
    <XStack ai="center" gap="$2.5">
      <XStack style={styles.iconContainer}>
        {LeftIcon && (
          <LeftIcon style={styles.LeftIcon} onTouchStart={onTouchStartLIcon} />
        )}
      </XStack>
      <YStack f={1} h="$5" jc="flex-start">
        <Controller
          control={control}
          name={inputName}
          rules={rules}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              flex={1}
              size="$5"
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              onChangeText={(text) => onChangeTextAdapted(text, onChange)}
              value={value}
              pl={!!LeftIcon ? "$8" : "unset"}
              paddingRight={!!RightIcon ? "$8" : "unset"}
              style={style}
            />
          )}
        />
      </YStack>
      <XStack style={styles.iconContainer}>
        {RightIcon && (
          <RightIcon
            style={styles.RightIcon}
            onTouchStart={onTouchStartRIcon}
          />
        )}
      </XStack>
    </XStack>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    position: "relative",
  },
  LeftIcon: {
    position: "absolute",
    zIndex: 2,
    transform: [{ translateX: 70 }, { translateY: -10 }],
    right: 20,
  },
  RightIcon: {
    position: "absolute",
    zIndex: 2,
    transform: [{ translateX: -10 }, { translateY: -10 }],
    right: 20,
  },
});
