import React from 'react';
import {
  Box,
  VStack,
  Flex,
  useColorMode,
  Image,
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

function LandingPage () {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
  <VStack>
    <Box my={10} p={2}>
      <IconButton size="lg" 
      colorScheme={colorMode ==='dark'? "pink" : "none"} 
      variant={colorMode === 'dark' ? "solid" : "outline"} 
      shadow="md" borderRadius="full" 
      onClick={toggleColorMode} 
      icon={colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>} 
      border='2px'></IconButton>
    </Box>
    
    <Box >
      <Title/>
    </Box>

    <Box>
      <Flex my="110px">
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