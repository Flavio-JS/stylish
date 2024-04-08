import { Text, YStack } from "tamagui";
import { User } from "@/components/User/User";
import { Link } from "expo-router";

export default function Home() {
  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      paddingHorizontal="$4"
      backgroundColor="$background"
    >
      <User />
      <Link href={"firstScreen/"}>
        <Text>First Screen</Text>
      </Link>
    </YStack>
  );
}
