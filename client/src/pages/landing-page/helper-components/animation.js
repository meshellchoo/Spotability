import React from 'react';
import {
  Box,
  useColorMode,
  keyframes,
} from '@chakra-ui/react';


const bounce_right = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
  40% {
    -ms-transform: translateX(-30px);
    transform: translateX(-30px);
  }
  60% {
    -ms-transform: translateX(-15px);
    transform: translateX(-15px);
  }
}
`;

function LoopObject() {
    const {colorMode, toggleColorMode} = useColorMode();
    const bounce_animation = `${bounce_right} infinite 2s linear`;
  
    return (
      <Box p={0} animation={bounce_animation}>
          <img
          width="35px"
          height="35px"
          alt="Finger Pointing Right"
          src={colorMode === 'dark' ? "pointing_right_night.svg" : "pointing_right_light.png"}>
          </img>
      </Box>
    )
  }

export default LoopObject