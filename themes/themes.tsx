// https://react.geist-ui.dev/en-us/customization
// https://react.geist-ui.dev/en-us/guide/themes
// https://react.geist-ui.dev/en-us/guide/colors

import { GeistUIThemes, Themes } from "@geist-ui/core";

// Forked from the original light theme by geist
export const lightTheme: GeistUIThemes = Themes.createFromLight({
  type: "customLight",
  palette: {
    // accents_1: '#111',
    // accents_2: '#333',
    // accents_3: '#444',
    // accents_4: '#666',
    // accents_5: '#888',
    // accents_6: '#999',
    // accents_7: '#eaeaea',
    // accents_8: '#fafafa',
    // background: '#000',
    // foreground: '#fff',
    // selection: '#f81ce5',
    // secondary: '#888',
    // code: '#79ffe1',
    // border: '#333',
    // link: '#3291ff',
  },
});

export const darkTheme = Themes.createFromDark({
  type: "customDark",
  palette: {
    // accents_1: '#111',
    // accents_2: '#333',
    // accents_3: '#444',
    // accents_4: '#666',
    // accents_5: '#888',
    // accents_6: '#999',
    // accents_7: '#eaeaea',
    // accents_8: '#fafafa',
    // background: '#000',
    // foreground: '#fff',
    // selection: '#f81ce5',
    // secondary: '#888',
    // code: '#79ffe1',
    // border: '#333',
    // link: '#3291ff',
  },
});
