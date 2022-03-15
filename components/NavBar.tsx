import React from "react";
import { Flex, Text, Box, useColorMode, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { bgColor, color } from "../theme";

interface NavBarProps {}

const NavBar = ({}: NavBarProps) => {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Box
        position="fixed"
        width="100%"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
      >
        <Flex
          position="relative"
          maxWidth="760px"
          transform="translate(-50%,0)"
          left="50%"
          alignItems="center"
          justifyContent={"space-between"}
          py="1"
        >
          <NextLink href="/" passHref>
            <Link fontSize="3xl">NoSyn&#39;s blog</Link>
          </NextLink>

          <DarkModeSwitch />
        </Flex>
        {/* Spacing navbar */}
      </Box>
      <Box paddingTop={"70px"} />
    </Box>
  );
};

export default NavBar;
