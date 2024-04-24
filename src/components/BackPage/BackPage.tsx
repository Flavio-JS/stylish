import { ArrowLeft } from "@tamagui/lucide-icons";
import { Link } from "expo-router";
import { Href } from "expo-router/build/link/href";
import { StyleSheet } from "react-native";

export type BackPageProps = {
  href: Href;
};

export default function BackPage({ href }: BackPageProps) {
  return (
    <Link href={href} style={styles.IconContainer}>
      <ArrowLeft />
    </Link>
  );
}

const styles = StyleSheet.create({
  IconContainer: {
    position: "absolute",
    zIndex: 2,
    left: -25,
    top: 15,
  },
});
