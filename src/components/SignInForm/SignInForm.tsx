import { regex } from "@/utils/regex/regex";
import { Eye, EyeOff, Lock, User } from "@tamagui/lucide-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Button, Form, Input, Label, Text, XStack, YStack } from "tamagui";

export default function SignInForm() {
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
  };

  return (
    <Form onSubmit={() => handleSubmit()}>
      <YStack gap="$6" marginBottom="$9">
        <XStack ai="center" gap="$2.5">
          <User />
          <YStack f={1} h="$5">
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
          </YStack>
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
  );
}

// Contém pelo menos uma letra minúscula
// Contém pelo menos uma letra maiúscula
// Contém pelo menos um número
// Contém pelo menos um caractere especial
// Tem pelo menos 5 caracteres
