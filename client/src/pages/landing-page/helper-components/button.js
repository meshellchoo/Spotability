import { Button, ButtonGroup } from '@chakra-ui/react'
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
} from '@chakra-ui/react';

import axios from "axios";


const baseURL = "http://127.0.0.1:8000/api/";

function LoginButton () {

    // const [isControlled, value] = useControllableProp(propValue, stateValue)

    // const [value, setValue] = useControllableState(options)

    const handleClick = () => {
        axios.get(baseURL).then((response) => {
          });
    }

    return(
        <VStack>
            <Button _hover={{ bg: '#86f29a' }}  
                size='lg'
                shadow='lg'
                bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
                onClick={handleClick}> 

                <Text color='#000' fontSize='1xl'>
                Login To Spotify
                </Text> 

            </Button>

        </VStack>


    )


}


export default LoginButton