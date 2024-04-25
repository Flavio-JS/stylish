import { regex } from "@/utils/regex/regex";
import { Eye, EyeOff, Lock, User } from "@tamagui/lucide-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Text, YStack } from "tamagui";
import InputIcon from "../Components/InputIcon/InpuIcon";
import PasswordCheck from "../Components/PasswordCheck/PasswordCheck";
import { SignUpFormData } from "./types";

export default function SignUpForm() {
  const [password, setPassword] = useState("");
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
      confirmPassword: "",
    },
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Form onSubmit={() => onSubmit()}>
      <YStack marginBottom="$9" gap="$3">
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
        <YStack gap="$3" mt="$3">
          <InputIcon
            LeftIcon={Lock}
            RightIcon={secureTextEntryPassword ? Eye : EyeOff}
            inputName="password"
            control={control}
            placeholder="Password"
            onChangeText={(text) => {
              text && setPassword(text);
            }}
            rules={{
              required: true,
              pattern: regex.passwordRegex,
            }}
            style={
              errors.password
                ? {
                    borderColor: "red",
                  }
                : {}
            }
            secureTextEntry={secureTextEntryPassword}
            onTouchStartRIcon={() =>
              setSecureTextEntryPassword(!secureTextEntryPassword)
            }
          />
          <PasswordCheck password={password} />
        </YStack>
        <InputIcon
          LeftIcon={Lock}
          RightIcon={secureTextEntryConfirm ? Eye : EyeOff}
          inputName="confirmPassword"
          control={control}
          placeholder="Confirm Password"
          rules={{
            required: true,
            pattern: regex.passwordRegex,
            validate: (value, formValues) => value === formValues.password,
          }}
          style={
            errors.confirmPassword
              ? {
                  borderColor: "red",
                }
              : {}
          }
          secureTextEntry={secureTextEntryConfirm}
          onTouchStartRIcon={() =>
            setSecureTextEntryConfirm(!secureTextEntryConfirm)
          }
        />
      </YStack>

      <Form.Trigger asChild>
        <Button backgroundColor="$red9">
          <Text color="white">Create Account</Text>
        </Button>
      </Form.Trigger>
    </Form>
  );
}
