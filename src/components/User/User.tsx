import { useState } from "react";
import { Avatar, Button, H4, Input, Text, XStack, YStack } from "tamagui";
import { Edit3 } from "@tamagui/lucide-icons";

export const User = () => {
  const [userName, setUserName] = useState("");
  const [inputText, setInputText] = useState("");

  return (
    <XStack gap="$3">
      <Avatar size="$5" circular>
        <Avatar.Image src={`https://github.com/${userName}.png`} />
        <Avatar.Fallback backgroundColor="$gray5" />
      </Avatar>

      <YStack gap="$-1.5">
        <Text color="$gray10">Olá{userName && <>,</>}</Text>
        {userName && (
          <XStack ai="center" gap="$2">
            <H4 fontWeight="bold">{userName}</H4>
            <Button size="$2" variant="outlined" icon={<Edit3 />} onTouchEnd={() => setUserName("")} />
          </XStack>
        )}
        {!userName && (
          <XStack ai="center" gap="$2" w="$15">
            <Input
              flex={1}
              size="$2"
              placeholder="userName"
              onChangeText={(text) => setInputText(text)}
            />
            <Button size="$2" onTouchEnd={() => setUserName(inputText)}>
              Go
            </Button>
          </XStack>
        )}
      </YStack>
    </XStack>
  );
};
