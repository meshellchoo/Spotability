import React from 'react';
import {
  Box,
  VStack,
  Flex,  useColorMode,
  Image,
  IconButton,
  Heading,
  Wrap,
  WrapItem,
  Center,
  Button,
} from '@chakra-ui/react';
import {
  SunIcon,
  MoonIcon, 
} from '@chakra-ui/icons'


function HomePage () {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
//   <VStack>
    // <Box my={10}>
    //   <IconButton size="lg" colorScheme={colorMode ==='dark'? "pink" : "blackAlpha"} variant="solid" shadow="lg" borderRadius="full" onClick={toggleColorMode} icon={colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>}>
        
    //   </IconButton>
    // </Box>

//     <Box>
//         <Flex my="20">
//             <Button colorScheme='fec5bb' borderColor='fec5bb'  _hover={{ bg: '#fec5bb' }}>
//                 <Image
//                     src="avatar.svg"
//                     boxSize='200px'
//                 >
//                 </Image>
//             </Button>
//         </Flex>
//     </Box>    

    
//     <Box>
//         <Flex my="10">
//             <Heading fontSize="5xl" fontWeight="700" fontStyle="bold">
//                 Trending Now
//             </Heading>
//         </Flex>
//     </Box>

//     <Flex>
//     <Text>
//         test
//     </Text>
//     </Flex>



    
//     <Wrap>
//   <WrapItem>
//     <Center w='200px' h='80px' bg='red.200'>
      
//     </Center>
//   </WrapItem>
//   <WrapItem>
//     <Center w='200px' h='80px' bg='red.200'>
//       Box 2
//     </Center>
//   </WrapItem>
//   <WrapItem>
//     <Center w='200px' h='80px' bg='red.200'>
//       Box 3
//     </Center>
//   </WrapItem>
//   <WrapItem>
//     <Center w='200px' h='80px' bg='red.200'>
//       Box 4
//     </Center>
//   </WrapItem>
// </Wrap>
    
    

    

    
    
//   </VStack>



<VStack >
    <Box my={10}>
      <IconButton size="lg" colorScheme={colorMode ==='dark'? "pink" : "blackAlpha"} variant="solid" shadow="lg" borderRadius="full" onClick={toggleColorMode} icon={colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>}>
        
      </IconButton>
    </Box>

    <Flex direction="column">
        <Box>
          <Image src="landing-page-image.svg"></Image>
        </Box>


        <Box>
            <Heading fontSize="6xl" fontWeight="700" fontStyle="bold">
              Trending Now
            </Heading>
        </Box>
        
        <Wrap>
            <WrapItem>
                <Center w='200px' h='300px' bg='red.200'>
      
                    </Center>
            </WrapItem>
            <WrapItem>
                <Center w='200px' h='300px' bg='red.200'>
                    
                    </Center>
                </WrapItem>
            <WrapItem>
                <Center w='200px' h='300px' bg='red.200'>
                    
                    </Center>
            </WrapItem>
            <WrapItem>
                <Center w='200px' h='300px' bg='red.200'>
                    
                    </Center>
            </WrapItem>
        </Wrap>
      
        <Flex my="40px"/>

        <Box>
            <Center>
                <Button size="lg" 
                bgGradient='linear(to-r, green.200, pink.500)' 
                _hover={{ bg: '#fb76dc' }} >
                    Match Now
                </Button>
            </Center>
        </Box>
        
        <Flex my="40px"/>


        <Wrap>
            <WrapItem>
                <Center w='200px' h='300px' bg='red.200'>
      
                    </Center>
            </WrapItem>
            <WrapItem>
                <Center w='200px' h='300px' bg='red.200'>
                    
                    </Center>
                </WrapItem>
            <WrapItem>
                <Center w='200px' h='300px' bg='red.200'>
                    
                    </Center>
            </WrapItem>
            <WrapItem>
                <Center w='200px' h='300px' bg='red.200'>
                    
                    </Center>
            </WrapItem>
        </Wrap>
        


    </Flex>
</VStack>
  )
}

export default HomePage