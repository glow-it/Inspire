import { Tooltip } from '@chakra-ui/react'
import React from 'react'

function ToolTip({label,target}) {
  return (
    <Tooltip
    placement="top"
    hasArrow
    label={label}
    bg="black"
    color="white"
    openDelay={500}
    rounded="full"
    py="2"
    px="6"
    cursor='pointer'
  >
    {target}
  </Tooltip>
  )
}

export default ToolTip