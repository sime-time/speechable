import {
  createContext,
  type PropsWithChildren,
  useContext,
  useState,
} from "react";
import { useColorScheme } from "react-native";

export type ThemeMode = "light" | "dark" | "system";

export type ThemeColors = {
  background: string;
  foreground: string;

  surface: string;
  surfaceSecondary: string;
  surfaceTertiary: string;

  border: string;

  primary: string;
  primaryForeground: string;
  primarySoft: string;

  muted: string;
  mutedForeground: string;
  mutedBackground: string;

  success: string;
  successForeground: string;
  info: string;
  infoForeground: string;
  warning: string;
  warningForeground: string;
  destructive: string;
  destructiveForeground: string;
};

export const lightColors: ThemeColors = {
  // Base
  background: "#F8FBF9",
  foreground: "#17372F",

  // Surfaces
  surface: "#FFFFFF",
  surfaceSecondary: "#F1F7F3",
  surfaceTertiary: "#E6F0E9",

  border: "#DFE9E2",

  // Brand — Mint
  primary: "#67D8B4",
  primaryForeground: "#17372F",
  primarySoft: "#DDF7EA",

  // Muted
  muted: "#94A79C",
  mutedForeground: "#52665B",
  mutedBackground: "#F0F5F1",

  // Semantic
  success: "#267C57",
  successForeground: "#FFFFFF",

  info: "#2668BD",
  infoForeground: "#FFFFFF",

  warning: "#F4BE62",
  warningForeground: "#382505",

  destructive: "#BF444C",
  destructiveForeground: "#FFFFFF",
};

export const darkColors: ThemeColors = {
  // Base
  background: "#101714",
  foreground: "#F2F8F4",

  // Surfaces
  surface: "#18231E",
  surfaceSecondary: "#223128",
  surfaceTertiary: "#2C3C32",

  border: "#374A3F",

  // Brand — Mint
  primary: "#77E4BE",
  primaryForeground: "#103126",
  primarySoft: "#1B3D31",

  // Muted
  muted: "#748C7F",
  mutedForeground: "#B3C6B9",
  mutedBackground: "#233029",

  // Semantic
  success: "#70D6A3",
  successForeground: "#103126",

  info: "#82B6FF",
  infoForeground: "#0E2646",

  warning: "#F4C879",
  warningForeground: "#352405",

  destructive: "#FF8A8F",
  destructiveForeground: "#3C1118",
};

export const themes = {
  light: lightColors,
  dark: darkColors,
} as const;

export type ThemeName = keyof typeof themes;

type ThemeContextValue = {
  c: ThemeColors;
  mode: ThemeMode;
  resolvedTheme: ThemeName;
  setMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: PropsWithChildren) {
  const systemTheme = useColorScheme();
  const [mode, setMode] = useState<ThemeMode>("system");

  const resolvedTheme: ThemeName =
    mode === "system" ? (systemTheme === "dark" ? "dark" : "light") : mode;

  const c: ThemeColors = themes[resolvedTheme];

  function toggleTheme() {
    setMode((currentMode) => {
      const currentResolvedTheme =
        currentMode === "system"
          ? systemTheme === "dark"
            ? "dark"
            : "light"
          : currentMode;

      return currentResolvedTheme === "dark" ? "light" : "dark";
    });
  }

  return (
    <ThemeContext.Provider
      value={{
        c,
        mode,
        resolvedTheme,
        setMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return theme;
}
