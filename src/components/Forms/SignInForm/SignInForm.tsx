import { regex } from "@/utils/regex/regex";
import { Eye, EyeOff, Lock, User } from "@tamagui/lucide-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Text, XStack, YStack } from "tamagui";
import InputIcon from "../Components/InputIcon/InpuIcon";
import { SignInFormData } from "./types";

export default function SignInForm() {
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
      <YStack marginBottom="$9" gap="$6">
        <InputIcon
          LeftIcon={User}
          inputName="email"
          control={control}
          placeholder="Email"
          rules={{
            required: true,
            pattern: regex.emailRegex,
          }}
          style={
            errors.email
              ? {
                  borderColor: "red",
                }
              : {}
          }
        />
        <YStack>
          <InputIcon
            LeftIcon={Lock}
            RightIcon={secureTextEntry ? Eye : EyeOff}
            inputName="password"
            control={control}
            placeholder="Password"
            rules={{
              required: true,
            }}
            style={
              errors.password
                ? {
                    borderColor: "red",
                  }
                : {}
            }
            secureTextEntry={secureTextEntry}
            onTouchStartRIcon={() => setSecureTextEntry(!secureTextEntry)}
          />
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
