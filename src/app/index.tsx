import { Text, View } from "react-native";
import { s } from "@/ui/styles";
import { useTheme } from "@/ui/theme";

export default function Index() {
  const { c } = useTheme();
  return (
    <View
      style={[
        s.flex1,
        s.itemsCenter,
        s.justifyCenter,
        { backgroundColor: c.primary },
      ]}
    >
      <Text style={[{ color: c.foreground }]}>Speechable.</Text>
    </View>
  );
}
