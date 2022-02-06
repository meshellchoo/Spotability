import { Button, ButtonGroup, HStack } from '@chakra-ui/react'
import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Center,
  Heading,
  Flex,
  useColorMode,
  useMediaQuery
} from '@chakra-ui/react';


import {useState, useEffect} from 'react'
import axios from "axios";

import LoopObject from "./animation"
const baseURL = "http://127.0.0.1:8000/api/";


/*
testing
*/
//import LandingPage from "../../home-page/home-page"


function LoginButton () {
    const {colorMode, toggleColorMode} = useColorMode();
    const [desktopQuery] = useMediaQuery("(min-width: 700px)");
    const [isDesktop, setIsDesktop] = useState(false);
  
    useEffect(() => {
      if(desktopQuery !== isDesktop){
        setIsDesktop(desktopQuery);
      }
    }, [isDesktop, desktopQuery])

    const handleClick = () => {
        axios.get(baseURL).then((response) => {
          });
          
    }

    return(
        <VStack>
          <Center>
            <HStack>
                <Flex direction="row">
                  <Box mx={3}>
                    <Heading fontSize='3xl'color={colorMode ==='dark'? "pink" : "blackAlpha"}>
                        Discover your matches. 
                    </Heading>
                    </Box>
                    <Flex direction="row" display={["none", "none", "flex", "flex"]}>
                      <Box mx={5} display={isDesktop === 'true'}>
                        <LoopObject />
                      </Box>
                    </Flex>
                </Flex>
                <Box >
                  <Button _hover={{ bg: '#86f29a' }}  
                    size={isDesktop === true ? 'lg': 'md'}
                    shadow='lg'
                    bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
                    onClick={handleClick}> 

                    <Text color='#000' fontSize={isDesktop === true ? '1xl': 'md'} >
                      {isDesktop === true ? "Login with Spotify": "Login with Spotify"}
                    </Text> 
                
                  </Button>
                  </Box>
            </HStack>
            </Center>
        </VStack>


    )

}


export default LoginButton