import BackPage from "@/components/BackPage/BackPage";
import SignInForm from "@/components/Forms/SignInForm/SignInForm";
import { Chrome, Apple, Facebook } from "@tamagui/lucide-icons";
import { Link } from "expo-router";
import { Button, H1, Text, XStack, YStack } from "tamagui";

export default function SignInPageComponent() {
  return (
    <YStack flex={1} py="$4.5" px="$6" gap="$6" backgroundColor="$background">
      <YStack>
        <BackPage />
        <H1>Welcome</H1>
        <H1>Back!</H1>
      </YStack>
      <SignInForm />
      <YStack ai="center" jc="center" gap="$4.5">
        <Text>- OR Continue with -</Text>
        <XStack gap="$2.5">
          <Button circular size="$6" borderColor="$red9" bg="$red5">
            <Chrome />
          </Button>
          <Button circular size="$6" borderColor="$red9" bg="$red5">
            <Apple />
          </Button>
          <Button circular size="$6" borderColor="$red9" bg="$red5">
            <Facebook />
          </Button>
        </XStack>
        <Text>
          Create An Account
          <Link href="/sign-up/">
            <Text color="$red9"> Sign Up</Text>
          </Link>
        </Text>
      </YStack>
    </YStack>
  );
}
