import { Button, ButtonGroup, HStack } from '@chakra-ui/react'
import React from 'react';
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
} from '@chakra-ui/react';



import axios from "axios";

import LoopObject from "./animation"


const baseURL = "http://127.0.0.1:8000/api/";

function LoginButton () {
    const {colorMode, toggleColorMode} = useColorMode();

    // const [isControlled, value] = useControllableProp(propValue, stateValue)
    // const [value, setValue] = useControllableState(options)

    const handleClick = () => {
        axios.get(baseURL).then((response) => {
          });
    }

    return(
        <VStack>
            <HStack>
                <Flex mx="100px">
                    <Text fontSize='2xl'color={colorMode ==='dark'? "pink" : "blackAlpha"}>
                        Try Me
                    </Text>
                </Flex>

                <LoopObject/>


                
                <Button _hover={{ bg: '#86f29a' }}  
                    size='lg'
                    shadow='lg'
                    bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
                    onClick={handleClick}> 

                    <Text color='#000' fontSize='1xl'>
                        Login To Spotify
                    </Text> 
                
                </Button>
            </HStack>
        </VStack>


    )

}


export default LoginButton