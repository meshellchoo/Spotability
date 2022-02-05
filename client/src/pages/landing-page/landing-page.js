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
  Image,
  Spacer,
  IconButton,
} from '@chakra-ui/react';
import {
  SunIcon,
  MoonIcon, 
} from '@chakra-ui/icons'


// Components
import Title from './helper-components/title';
import LoginButton from './helper-components/button'

// Assets
// import footer-img from "./assets/landing-page-image.svg"

function LandingPage () {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
  <VStack>
    <Box my={10}>
      <IconButton size="lg" colorScheme={colorMode ==='dark'? "pink" : "blackAlpha"} variant="solid" shadow="lg" borderRadius="full" onClick={toggleColorMode} icon={colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>}></IconButton>
    </Box>
    
    <Box >
      <Title/>
    </Box>

    <Box>
      <Flex my="150px">
        <LoginButton/>
      </Flex>
    </Box>

    <Box>
      <Image 
      src="./landing-page-image.svg">
      </Image>
    </Box>
    
  </VStack>
  )
}

export default LandingPage