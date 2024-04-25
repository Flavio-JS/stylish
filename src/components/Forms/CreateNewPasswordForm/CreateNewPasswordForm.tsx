import { regex } from "@/utils/regex/regex";
import { Eye, EyeOff, Lock, User } from "@tamagui/lucide-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Text, YStack } from "tamagui";
import InputIcon from "../Components/InputIcon/InpuIcon";
import PasswordCheck from "../Components/PasswordCheck/PasswordCheck";
import { CreateNewPasswordFormData } from "./types";

export default function CreateNewPasswordForm() {
  const [newPassword, setNewPassword] = useState("");
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
      <YStack marginBottom="$9" gap="$3">
        <YStack gap="$3">
          <InputIcon
            LeftIcon={Lock}
            RightIcon={secureTextEntryPassword ? Eye : EyeOff}
            inputName="newPassword"
            control={control}
            placeholder="Password"
            onChangeText={(text) => {
              text && setNewPassword(text);
            }}
            rules={{
              required: true,
              pattern: regex.passwordRegex,
            }}
            style={
              errors.newPassword
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

          <PasswordCheck password={newPassword} />
        </YStack>

        <InputIcon
          LeftIcon={Lock}
          RightIcon={secureTextEntryConfirm ? Eye : EyeOff}
          inputName="confirmNewPassowrd"
          control={control}
          placeholder="Confirm Password"
          rules={{
            required: true,
            pattern: regex.passwordRegex,
            validate: (value, formValues) => value === formValues.newPassword,
          }}
          style={
            errors.confirmNewPassowrd
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
          <Text color="white">Change Password</Text>
        </Button>
      </Form.Trigger>
    </Form>
  );
}
