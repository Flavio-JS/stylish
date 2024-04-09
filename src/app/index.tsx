import { Lock, User, Chrome, Apple, Facebook } from "@tamagui/lucide-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Button, Form, H1, Input, Text, XStack, YStack } from "tamagui";
import { TextInput } from "react-native";

export default function SignInPage() {
  const [password, setPassword] = useState("");

  return (
    <YStack
      flex={1}
      py="$4.5"
      px="$6"
      jc="space-between"
      backgroundColor="$background"
    >
      <YStack>
        <H1>Welcome</H1>
        <H1>Back!</H1>
      </YStack>
      <Form onSubmit={() => console.log("Clicou login")}>
        <YStack gap="$6" marginBottom="$9">
          <XStack ai="center" gap="$2.5">
            <User />
            <Input flex={1} size="$5" placeholder={`Username or Email`} />
          </XStack>
          <YStack>
            <XStack ai="center" gap="$2.5">
              <Lock />
              <Input flex={1} size="$5" placeholder={`Password`} />
            </XStack>
            <XStack jc="flex-end" mt="$2.5">
              <Link href="(screens)/firstScreen/">
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
          Create An Account{" "}
          <Link href="(screens)/firstScreen/">
            <Text color="$red9">Sign Up</Text>
          </Link>
        </Text>
      </YStack>
    </YStack>
  );
}
