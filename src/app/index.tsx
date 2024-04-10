import { regex } from "@/utils/regex/regex";
import {
  Lock,
  User,
  Chrome,
  Apple,
  Facebook,
  Eye,
  EyeOff,
} from "@tamagui/lucide-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Button, Form, H1, Input, Text, XStack, YStack } from "tamagui";

export default function SignInPage() {
  const [password, setPassword] = useState<string | undefined>();
  const [isValidpassword, setIsValidPassword] = useState<boolean | string>(
    "init"
  );

  const [email, setEmail] = useState<string | undefined>();
  const [isValidEmail, setIsValidEmail] = useState<boolean | string>("init");

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const validateEmail = () => {
    if (email !== undefined)
      regex.emailRegex.test(email)
        ? setIsValidEmail(true)
        : setIsValidEmail(false);
  };
  const validatePassword = () => {
    if (password !== undefined)
      regex.passwordRegex.test(password)
        ? setIsValidPassword(true)
        : setIsValidPassword(false);
  };

  const handleSubmit = () => {
    validateEmail();
    validatePassword();

    // const variables = {
    //   password,
    //   email,
    //   isValidpassword,
    //   isValidEmail,
    // };
    // console.log(variables);
    // console.log(password.length);
  };

  return (
    <YStack flex={1} py="$4.5" px="$6" gap="$6" backgroundColor="$background">
      <YStack>
        <H1>Welcome</H1>
        <H1>Back!</H1>
      </YStack>
      <Form onSubmit={() => handleSubmit()}>
        <YStack gap="$6" marginBottom="$9">
          <XStack ai="center" gap="$2.5">
            <User />
            <Input
              flex={1}
              size="$5"
              autoComplete="email"
              placeholder={`Email`}
              onChangeText={(text) => setEmail(text)}
              style={
                !isValidEmail
                  ? {
                      borderColor: "red",
                    }
                  : {}
              }
            />
          </XStack>
          <YStack>
            <XStack ai="center" gap="$2.5">
              {password?.length ? (
                <>
                  {secureTextEntry ? (
                    <Eye
                      onTouchStart={() => setSecureTextEntry(!secureTextEntry)}
                    />
                  ) : (
                    <EyeOff
                      onTouchStart={() => setSecureTextEntry(!secureTextEntry)}
                    />
                  )}
                </>
              ) : (
                <Lock />
              )}
              <Input
                flex={1}
                size="$5"
                secureTextEntry={secureTextEntry}
                placeholder={`Password`}
                onChangeText={(text) => setPassword(text)}
                style={
                  !isValidpassword
                    ? {
                        borderColor: "red",
                      }
                    : {}
                }
              />
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
