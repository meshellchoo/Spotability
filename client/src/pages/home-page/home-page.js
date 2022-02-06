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



// Components
import Container from '../../container';
import MatchCard from './helper-components/match_card';

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
    <Container>
      <VStack>
        <Box my={10} p={2}>
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
        <Flex>
        <Box>
          <Text> Temporary Header </Text>
        </Box>
        </Flex>
        
        <Flex>
        <Box>
          <MatchCard/>
        </Box>
        </Flex>
        
{/* 
        <Flex direction="column">
            <Box>
            <Image src={userImage} boxSize='200px'></Image>
            </Box>
            <Box>
                <Heading fontSize="3xl" fontWeight="700" fontStyle="bold" >
                Before we start, let's learn more about yourself.
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
             */}


        {/* </Flex> */}
    </VStack>
    </Container>
  )
}

export default HomePage