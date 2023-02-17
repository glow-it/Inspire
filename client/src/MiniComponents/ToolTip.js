import { Tooltip } from '@chakra-ui/react'
import React from 'react'

function ToolTip({label,target,position}) {
  let placement = position ? position : 'top'
  return (
    <Tooltip
    placement={placement}
    hasArrow
    label={label}
    bg="black"
    color="white"
    openDelay={500}
    rounded="full"
    py="1.5"
    textAlign='center'
    px="8"
    cursor='pointer'
  >
    {target}
  </Tooltip>
  )
}

export default ToolTip