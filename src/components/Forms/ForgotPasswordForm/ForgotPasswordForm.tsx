import { regex } from "@/utils/regex/regex";
import { Mail, MailOpen } from "@tamagui/lucide-icons";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Form, Input, Text, XStack, YStack } from "tamagui";
import { ForgotPasswordFormData } from "./types";

export default function ForgotPasswordForm() {
  const [isOnFocus, setIsOnFocus] = useState(false);

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
        <XStack ai="center" gap="$2.5">
          {isOnFocus ? <MailOpen /> : <Mail />}
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
                  onBlur={() => {
                    onBlur();
                    setIsOnFocus(!isOnFocus);
                  }}
                  onFocus={() => {
                    setIsOnFocus(!isOnFocus);
                  }}
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
