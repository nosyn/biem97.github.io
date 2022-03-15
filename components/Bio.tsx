import { Box, Image } from "@chakra-ui/react";
import React from "react";

interface BioProps {}

const Bio = ({}: BioProps) => {
  return (
    <Box>
      <Image
        borderRadius="full"
        boxSize="150px"
        src="/images/profile.jpg"
        alt="Son Nguyen"
        objectFit="cover"
        opacity={1}
      />
      <h1>Son</h1>
    </Box>
  );
};

export default Bio;
