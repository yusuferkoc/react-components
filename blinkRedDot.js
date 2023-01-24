import { Box, keyframes } from '@chakra-ui/react'
import React from 'react'


const Animation = keyframes`
0% {
  background-color: red;
}
50% {
  background-color: transparent;
}
100% {
  background-color: red;
}
`

const Blink = () => {
  return (
    <Box>
      <Box
        class="dot"
        width={'10px'}
        height="10px"
        backgroundColor={'red'}
        borderRadius="full"
        animation={`${Animation} infinite 1s `}
      >
      </Box>
    </Box>
  )
}

export default Blink
