import { regex } from "@/utils/regex/regex";
import { Text, XStack, YStack } from "tamagui";
import { FieldProp } from "../../SignUpForm/types";

type PasswordCheckProps = {
  password: string;
};

const textColor = (regex: RegExp, password: string) =>
  password === "" ? "$color" : regex.test(password) ? "$green10" : "$red10";

export default function PasswordCheck({ password }: PasswordCheckProps) {
  const fields: FieldProp[] = [
    {
      text: "lower case",
      color: textColor(regex.lowercaseRegex, password),
    },
    {
      text: "upper case",
      color: textColor(regex.uppercaseRegex, password),
    },
    { text: "number", color: textColor(regex.numberRegex, password) },
    {
      text: "special character: !@#$%^&*()",
      color: textColor(regex.specialCharRegex, password),
    },
    {
      text: "5 characters",
      color: textColor(regex.minLengthRegex, password),
    },
  ];

  return (
    <XStack jc="space-between" pl="$7">
      <YStack>
        {fields.slice(0, 3).map((requirement, index) => (
          <Text key={index} color={requirement.color}>
            {requirement.text}
          </Text>
        ))}
      </YStack>
      <YStack>
        {fields.slice(3).map((requirement, index) => (
          <Text key={index} color={requirement.color}>
            {requirement.text}
          </Text>
        ))}
      </YStack>
    </XStack>
  );
}
