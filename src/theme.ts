import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ 
  config,
  colors: {
    gray: {
      50: '#e4e7eb',  // Very light gray with a hint of blue
      100: '#cbd2d9', // Light gray with a cool tone
      200: '#9aa5b1', // Grayish blue
      300: '#7b8794', // Mid gray with a cool undertone
      400: '#616e7c', // Slightly darker gray, still cool
      500: '#52606d', // Darker cool gray
      600: '#3e4c59', // Darker, almost bluish gray
      700: '#323f4b', // Dark gray, leaning towards blue
      800: '#1f2933', // Darker gray, for backgrounds
      900: '#101921', // Very dark, near-black gray
    },
    blue: {
      50: '#e5f4ff',  // Light blue, for highlights
      100: '#c4e1ff', // Light blue, for secondary elements
      200: '#93c8ff', // Light blue
      300: '#6aaeff', // Sky blue
      400: '#3994ff', // Primary blue
      500: '#187bcd', // Dark blue, primary accent color
      600: '#1261a3', // Darker blue
      700: '#0c477a', // Even darker blue
      800: '#052f52', // Near-black blue
      900: '#011626', // Very dark blue, for deep backgrounds
    },
  },
});

export default theme;