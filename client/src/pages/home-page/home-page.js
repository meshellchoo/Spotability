import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Flex,  useColorMode,
  Grid,
  theme,
  Image,
  Spacer,
  IconButton,
  HStack,
  Button,
  Heading,
  Wrap,
  WrapItem,
  Center,
} from '@chakra-ui/react';
import {
  SunIcon,
  MoonIcon, 
} from '@chakra-ui/icons'






function HomePage () {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
  <VStack>
    <Box my={10}>
      <IconButton size="lg" colorScheme={colorMode ==='dark'? "pink" : "blackAlpha"} variant="solid" shadow="lg" borderRadius="full" onClick={toggleColorMode} icon={colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>}></IconButton>
    </Box>

    <Box>
        <Flex my="20">
            <Button colorScheme='fec5bb' borderColor='fec5bb'  _hover={{ bg: '#fec5bb' }}>
                <Image
                    src="avatar.svg"
                    boxSize='200px'
                >
                </Image>
            </Button>
        </Flex>
    </Box>    

    
    <Box>
        <Flex my="10">
            <Heading fontSize="5xl" fontWeight="700" fontStyle="bold">
                Trending Now
            </Heading>
        </Flex>
    </Box>
    
    
    <Wrap>
  <WrapItem>
    <Center w='180px' h='80px' bg='red.200'>
      Box 1
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='180px' h='80px' bg='red.200'>
      Box 2
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='180px' h='80px' bg='red.200'>
      Box 3
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='180px' h='80px' bg='red.200'>
      Box 4
    </Center>
  </WrapItem>
</Wrap>
    
    

    

    
    
  </VStack>
  )
}

export default HomePage