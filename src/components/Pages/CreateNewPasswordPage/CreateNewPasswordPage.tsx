import BackPage from "@/components/BackPage/BackPage";
import CreateNewPasswordForm from "@/components/Forms/CreateNewPasswordForm/CreateNewPasswordForm";
import { H1, YStack } from "tamagui";

export default function CreateNewPasswordPageComponent() {
  return (
    <YStack flex={1} py="$4.5" px="$6" gap="$6" backgroundColor="$background">
      <YStack>
        <BackPage />
        <H1>Create a</H1>
        <H1>New password</H1>
      </YStack>

      <CreateNewPasswordForm />
    </YStack>
  );
}
