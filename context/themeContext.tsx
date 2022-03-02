import { GeistProvider } from "@geist-ui/core";
import React from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { darkTheme, lightTheme } from "../themes/themes";
// import { RenderLog } from "../utils/devtools";

type tThemeType = "light" | "dark";

type tThemeContext = [
  tThemeType,
  React.Dispatch<React.SetStateAction<tThemeType>>
];

const ThemeContext = React.createContext<tThemeContext | null>(null);

export function ThemeContextProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [themeType, setThemeType] = useLocalStorageState<tThemeType>(
    "theme",
    null
  );
  //   RenderLog("Theme Context");

  return (
    <ThemeContext.Provider value={[themeType, setThemeType]}>
      <GeistProvider themes={[lightTheme, darkTheme]} themeType={themeType}>
        {children}
      </GeistProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const state = React.useContext(ThemeContext);
  if (!state) {
    throw new Error(
      "useThemeContext can only be used within a ThemeContextProvider component"
    );
  }
  return state;
}
