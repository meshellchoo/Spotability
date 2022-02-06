import { Button, ButtonGroup, HStack } from '@chakra-ui/react'
import React from 'react';
import { useSpring, animated } from 'react-spring';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Flex,
  Grid,
  theme,
  useColorMode,
  Image,
} from '@chakra-ui/react';


function LoopObject() {
    const styles = useSpring({
      loop: { reverse: true },
      from: { x: -80 },
      to: { x: -10 },
    })
  
    return (
      <animated.div style={styles}>
          <Box>
          <Image 
            src="pointing_right.svg">
          </Image>
          </Box>
      </animated.div>
    )
  }

export default LoopObject



  
  
  
