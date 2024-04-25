import { Button, Form, Text, YStack } from "tamagui";
import * as Speech from "expo-speech";
import { useForm } from "react-hook-form";
import InputIcon from "@/components/Forms/Components/InputIcon/InpuIcon";
import { User } from "@tamagui/lucide-icons";

export default function HomeScreenComponent() {
  return (
    <YStack flex={1} jc="center" bg="$background">
      <TesteForm />
    </YStack>
  );
}

export type TesteFormData = {
  name: string;
};

export function TesteForm() {
  const speak = (name: string) => {
    const thingToSay = `Bem vindo ${name}`;
    Speech.speak(thingToSay, { rate: 1.25 });
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TesteFormData>({
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data.name);
    speak(data.name);
  });

  return (
    <Form onSubmit={() => onSubmit()}>
      <YStack marginBottom="$9">
        <InputIcon
          LeftIcon={User}
          inputName="name"
          control={control}
          placeholder="Name"
          rules={{
            required: true,
          }}
          style={{ borderColor: errors.name ? "red" : "black", width: 300 }}
        />
      </YStack>

      <Form.Trigger asChild>
        <Button backgroundColor="$red9">
          <Text color="white">Teste</Text>
        </Button>
      </Form.Trigger>
    </Form>
  );
}
