import { useColorMode, Switch, Box, IconButton } from "@chakra-ui/react";
import { StarIcon, SunIcon } from "@chakra-ui/icons";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      aria-label="theme-toggle"
      onClick={toggleColorMode}
      variant="ghost"
    >
      {isDark ? <StarIcon color={"yellow"} /> : <SunIcon color={"red"} />}
    </IconButton>
  );
};
