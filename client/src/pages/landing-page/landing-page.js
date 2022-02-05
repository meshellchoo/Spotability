import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Flex,
  useColorMode,
  Grid,
  theme,
  Spacer,
  IconButton,
} from '@chakra-ui/react';
import {
  SunIcon,
  MoonIcon, 
} from '@chakra-ui/icons'
import Title from './helper-components/title';

//compoents
import LoginButton from './helper-components/button'


function LandingPage () {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
  <VStack>
    <Box p={3}>
      <Spacer/>
      <IconButton borderRadius="full" onClick={toggleColorMode} icon={colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>}></IconButton>
    </Box>
    <Title/>
  </VStack>
  )
}

export default LandingPage