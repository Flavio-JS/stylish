import SignUpForm from "@/components/Forms/SignUpForm/SignUpForm";
import { Apple, Chrome, Facebook } from "@tamagui/lucide-icons";
import { Link } from "expo-router";
import { Button, H1, Text, XStack, YStack } from "tamagui";

export default function SignInPage() {
  return (
    <YStack flex={1} py="$4.5" px="$6" gap="$6" backgroundColor="$background">
      <YStack>
        <H1>Create an</H1>
        <H1>account</H1>
      </YStack>

      <SignUpForm />
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
          I Already Have an Account
          <Link href="/">
            <Text color="$red9"> Login</Text>
          </Link>
        </Text>
      </YStack>
    </YStack>
  );
}
