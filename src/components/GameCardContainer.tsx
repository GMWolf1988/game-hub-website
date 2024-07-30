import { Box, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const GameCardContainer = ({ children }: Props) => {
  const { colorMode } = useColorMode();

  const hoverBorderColor = colorMode === "dark" ? "white" : "blue";

  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      transition="transform 0.2s, border-color 0.2s"
      border="2px solid transparent" // No visible border initially
      _hover={{
        transform: "scale(1.05)",
        borderColor: hoverBorderColor, // Border color appears on hover
      }}
    >
      {children}
    </Box>
  );
};
