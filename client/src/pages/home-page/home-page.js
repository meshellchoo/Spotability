import React, { useState } from 'react';
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
  Text,
} from '@chakra-ui/react';
import {
  SunIcon,
  MoonIcon, 
} from '@chakra-ui/icons'

import axios from "axios";

import {
    useEffect
  } from 'react';

function HomePage () {

  const {colorMode, toggleColorMode} = useColorMode();

  const [userData, setUserData] = useState("");

  const [userImage, setUserImage] = useState("");



    axios.get("http://127.0.0.1:8000/spotability/search-by-email?email=candywithonon@ymail.com").then((response) => {
        setUserData(response.data);
        //console.log(userData);
        
        setUserImage(userData["img_url"])


        // console.log(userData["top_genres"])
      });


    



  return (

    <VStack >
        <Box my={10}>
        <IconButton 
        size="lg" 
        colorScheme={colorMode ==='dark'? "pink" : "none"} 
        variant={colorMode === 'dark' ? "solid" : "outline"} 
        shadow="md" borderRadius="full" 
        onClick={toggleColorMode} 
        icon={colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>} 
        border='2px'>
            
        </IconButton>
        </Box>

        <Flex direction="column">
            <Box>
            <Image src={userImage} boxSize='200px'></Image>
            </Box>


            <Box>
                <Heading fontSize="4xl" fontWeight="700" fontStyle="bold" >
                Interesting Facts About Yourself
                </Heading>
            </Box>
            
            <Wrap>
                <WrapItem>
                    <Center w='200px' h='300px' bg='red.200'>
                        <Text textAlign='center' color={colorMode ==='dark'? "red" : "blackAlpha"}>
                            You are beautifuy Yourself you are nice
                        </Text>
                    </Center>
                </WrapItem>

                <WrapItem>
                    <Center w='200px' h='300px' bg='red.200'>
                        <Text textAlign='center'>
                            You are beautifuy Yourself you are nice
                        </Text>    
                    </Center>
                    </WrapItem>
                <WrapItem>
                    <Center w='200px' h='300px' bg='red.200'>
                        <Text textAlign='center' >
                            You are beautifuy Yourself you are nice
                        </Text>    
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center w='200px' h='300px' bg='red.200'>
                        <Text textAlign='center'>
                            You are beautifuy Yourself you are nice
                        </Text>    
                    </Center>
                </WrapItem>
            </Wrap>
        
            <Flex my="40px"/>

            <Box>
                <Center>
                    <Button size="lg" 
                    bgGradient='linear(to-r, green.200, pink.500)' 
                    _hover={{ bg: '#fb76dc' }} 
                    
                    >
                        Match Now
                    </Button>
                </Center>
            </Box>
            
            <Flex my="40px"/>

            <Box>
                <Heading fontSize="4xl" fontWeight="700" fontStyle="bold">
                Tips For your Next Match
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
            


        </Flex>
    </VStack>
  )
}

export default HomePage