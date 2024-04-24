import { regex } from "@/utils/regex/regex";
import { Eye, EyeOff, Lock, User } from "@tamagui/lucide-icons";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Form, Input, Text, XStack, YStack } from "tamagui";
import PasswordCheck from "../Components/PasswordCheck/PasswordCheck";
import { SignUpFormData } from "./types";

export default function SignUpForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [secureTextEntryPassword, setSecureTextEntryPassword] = useState(true);
  const [secureTextEntryConfirm, setSecureTextEntryConfirm] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Form onSubmit={() => onSubmit()}>
      <YStack marginBottom="$9">
        <XStack ai="center" gap="$2.5">
          <User />
          <YStack f={1} h="$5" jc="flex-start">
            <Controller
              control={control}
              name="email"
              rules={{
                required: true,
                pattern: regex.emailRegex,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  flex={1}
                  size="$5"
                  autoComplete="email"
                  placeholder={`Email`}
                  onChangeText={onChange}
                  value={value}
                  onBlur={onBlur}
                  style={
                    errors.email
                      ? {
                          borderColor: "red",
                        }
                      : {}
                  }
                />
              )}
            />
          </YStack>
        </XStack>
        <YStack gap="$3">
          <XStack ai="center" gap="$2.5" mt="$5">
            {password.length ? (
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
              name="password"
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  flex={1}
                  size="$5"
                  placeholder={`Password`}
                  onChangeText={(text) => {
                    onChange(text);
                    setPassword(text);
                  }}
                  secureTextEntry={secureTextEntryPassword}
                  value={value}
                  onBlur={onBlur}
                  style={
                    errors.password
                      ? {
                          borderColor: "red",
                        }
                      : {}
                  }
                />
              )}
            />
          </XStack>
          <PasswordCheck password={password} />
        </YStack>

        <XStack ai="center" gap="$2.5" mt="$5">
          {confirmPassword.length ? (
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
            name="confirmPassowrd"
            rules={{
              required: true,
              pattern: regex.passwordRegex,
              validate: (value, formValues) => value === formValues.password,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                flex={1}
                size="$5"
                placeholder={`Confirm Password`}
                onChangeText={(text) => {
                  onChange(text);
                  setConfirmPassword(text);
                }}
                secureTextEntry={secureTextEntryConfirm}
                value={value}
                onBlur={onBlur}
                style={
                  errors.confirmPassowrd
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
          <Text color="white">Create Account</Text>
        </Button>
      </Form.Trigger>
    </Form>
  );
}
