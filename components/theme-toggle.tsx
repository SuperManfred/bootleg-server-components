import { Button } from "@geist-ui/core";
import { CssBaseline, GeistProvider } from "@geist-ui/core";
import { useState } from "react";
import { Sun, Moon } from "@geist-ui/icons";
import { useThemeContext } from "../context/themeContext";
// import { RenderLog } from '../utils/devtools';

export default function ThemeToggle() {
  const [themeType, setThemeType] = useThemeContext();
  // RenderLog("Theme Toggle");

  return (
    <>
      <CssBaseline />
      <Button
        icon={themeType === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        auto
        scale={0.7}
        px={0.6}
        aria-label="Toggle Dark mode"
        type="abort"
        onClick={() =>
          setThemeType((prev) => (prev === "dark" ? "light" : "dark"))
        }
        style={{
          marginBottom: "0",
        }}
      ></Button>
    </>
  );
}
