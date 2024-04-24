import { regex } from "@/utils/regex/regex";
import { Mail } from "@tamagui/lucide-icons";
import { useForm } from "react-hook-form";
import { Button, Form, Text, YStack } from "tamagui";
import InputIcon from "../Components/InputIcon/InpuIcon";
import { ForgotPasswordFormData } from "./types";

export default function ForgotPasswordForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Form onSubmit={() => onSubmit()}>
      <YStack marginBottom="$9" gap="$5">
        <InputIcon
          LeftIcon={Mail}
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
        <YStack ai="center" jc="center" gap="$4.5">
          <Text>
            <Text color="$orange7">*</Text> We will send you a message to set or
            reset your new password
          </Text>
        </YStack>
      </YStack>

      <Form.Trigger asChild>
        <Button backgroundColor="$red9">
          <Text color="white">Submit</Text>
        </Button>
      </Form.Trigger>
    </Form>
  );
}
