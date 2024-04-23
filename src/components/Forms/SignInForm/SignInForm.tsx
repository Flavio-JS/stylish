import { regex } from "@/utils/regex/regex";
import { Eye, EyeOff, Lock, User } from "@tamagui/lucide-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Form, Input, Text, XStack, YStack } from "tamagui";
import { SignInFormData } from "./types";

export default function SignInForm() {
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
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
        <YStack>
          <XStack ai="center" gap="$2.5" mt="$5">
            {password.length ? (
              <>
                {secureTextEntry ? (
                  <Eye
                    onTouchStart={() => setSecureTextEntry(!secureTextEntry)}
                  />
                ) : (
                  <EyeOff
                    onTouchStart={() => setSecureTextEntry(!secureTextEntry)}
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
                  secureTextEntry={secureTextEntry}
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
          <XStack jc="flex-end" mt="$2.5">
            <Link href="/forgot-password">
              <Text color="$red9">Forgot Password?</Text>
            </Link>
          </XStack>
        </YStack>
      </YStack>

      <Form.Trigger asChild>
        <Button backgroundColor="$red9">
          <Text color="white">Login</Text>
        </Button>
      </Form.Trigger>
    </Form>
  );
}
