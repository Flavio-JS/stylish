import CreateNewPasswordForm from "@/components/Forms/CreateNewPasswordForm/CreateNewPasswordForm";
import { H1, YStack } from "tamagui";

export default function CreateNewPasswordPage() {
  return (
    <YStack flex={1} py="$4.5" px="$6" gap="$6" backgroundColor="$background">
      <YStack>
        <H1>Create a new</H1>
        <H1>Password</H1>
      </YStack>

      <CreateNewPasswordForm />
    </YStack>
  );
}
