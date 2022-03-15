import Head from "next/head";
import NextLink from "next/link";
import { Box, Image, Stack, Link } from "@chakra-ui/react";
import NavBar from "./NavBar";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <Box>
      <Head>
        <link rel="icon" href="/nosyn-logo.svg" />
      </Head>
      <NavBar />

      <Stack mx="auto" maxW="760px" px={2} py={1}>
        <main>{children}</main>
        {!home && (
          <NextLink href="/" passHref>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </NextLink>
        )}
      </Stack>
    </Box>
  );
}
