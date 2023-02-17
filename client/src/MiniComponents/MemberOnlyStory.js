import React from "react";
import { Tooltip } from "@chakra-ui/react";

function MemberOnlyStory() {
  return (
    <Tooltip
      placement="top"
      hasArrow
      label="Member only story"
      bg="black"
      color="white"
      openDelay={500}
      rounded="full"
      py="2"
      px="6"
      cursor='pointer'
    >
      <span className=" text-indigo-500">✦</span>
    </Tooltip>
  );
}

export default MemberOnlyStory;
