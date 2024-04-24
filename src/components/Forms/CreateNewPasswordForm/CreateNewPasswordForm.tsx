import { regex } from "@/utils/regex/regex";
import { Eye, EyeOff, Lock, User } from "@tamagui/lucide-icons";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Form, Input, Text, XStack, YStack } from "tamagui";
import PasswordCheck from "../Components/PasswordCheck/PasswordCheck";
import { CreateNewPasswordFormData } from "./types";

export default function CreateNewPasswordForm() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [secureTextEntryPassword, setSecureTextEntryPassword] = useState(true);
  const [secureTextEntryConfirm, setSecureTextEntryConfirm] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateNewPasswordFormData>({
    defaultValues: {
      newPassword: "",
      confirmNewPassowrd: "",
    },
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Form onSubmit={() => onSubmit()}>
      <YStack marginBottom="$9">
        <YStack gap="$3">
          <XStack ai="center" gap="$2.5" mt="$5">
            {newPassword.length ? (
              <>
                {secureTextEntryPassword ? (
                  <Eye
                    onTouchStart={() =>
                      setSecureTextEntryPassword(!secureTextEntryPassword)
                    }
                  />
                ) : (
                  <EyeOff
                    onTouchStart={() =>
                      setSecureTextEntryPassword(!secureTextEntryPassword)
                    }
                  />
                )}
              </>
            ) : (
              <Lock />
            )}
            <Controller
              control={control}
              name="newPassword"
              rules={{
                required: true,
                pattern: regex.passwordRegex,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  flex={1}
                  size="$5"
                  placeholder={`New Password`}
                  onChangeText={(text) => {
                    onChange(text);
                    setNewPassword(text);
                  }}
                  secureTextEntry={secureTextEntryPassword}
                  value={value}
                  onBlur={onBlur}
                  style={
                    errors.newPassword
                      ? {
                          borderColor: "red",
                        }
                      : {}
                  }
                />
              )}
            />
          </XStack>
          <PasswordCheck password={newPassword} />
        </YStack>

        <XStack ai="center" gap="$2.5" mt="$5">
          {confirmNewPassword.length ? (
            <>
              {secureTextEntryConfirm ? (
                <Eye
                  onTouchStart={() =>
                    setSecureTextEntryConfirm(!secureTextEntryConfirm)
                  }
                />
              ) : (
                <EyeOff
                  onTouchStart={() =>
                    setSecureTextEntryConfirm(!secureTextEntryConfirm)
                  }
                />
              )}
            </>
          ) : (
            <Lock />
          )}
          <Controller
            control={control}
            name="confirmNewPassowrd"
            rules={{
              required: true,
              pattern: regex.passwordRegex,
              validate: (value, formValues) => value === formValues.newPassword,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                flex={1}
                size="$5"
                placeholder={`Confirm Password`}
                onChangeText={(text) => {
                  onChange(text);
                  setConfirmNewPassword(text);
                }}
                secureTextEntry={secureTextEntryConfirm}
                value={value}
                onBlur={onBlur}
                style={
                  errors.confirmNewPassowrd
                    ? {
                        borderColor: "red",
                      }
                    : {}
                }
              />
            )}
          />
        </XStack>
      </YStack>

      <Form.Trigger asChild>
        <Button backgroundColor="$red9">
          <Text color="white">Change Password</Text>
        </Button>
      </Form.Trigger>
    </Form>
  );
}
