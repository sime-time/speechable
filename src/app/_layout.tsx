import { Stack } from "expo-router";
import { ThemeProvider } from "@/ui/theme";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack />
    </ThemeProvider>
  );
}
