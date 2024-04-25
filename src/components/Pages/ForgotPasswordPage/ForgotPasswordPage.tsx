import BackPage from "@/components/BackPage/BackPage";
import ForgotPasswordForm from "@/components/Forms/ForgotPasswordForm/ForgotPasswordForm";
import { Link } from "expo-router";
import { H1, YStack } from "tamagui";

export default function ForgotPasswordPageComponent() {
  return (
    <YStack flex={1} py="$4.5" px="$6" gap="$6" backgroundColor="$background">
      <YStack>
        <BackPage />
        <H1>
          <Link href={"/create-new-password"}>Forgot</Link>
        </H1>
        <H1>password?</H1>
      </YStack>

      <ForgotPasswordForm />
    </YStack>
  );
}
