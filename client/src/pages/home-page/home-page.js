import React, { useState } from 'react';
import {
  Box,
  VStack,
  Flex,  
  useColorMode,
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

import HomePageTitle from "./helper-components/home-title"

import FactsBox from './helper-components/home-factsBox';
import ReturnMatchedPerson from './helper-components/match_details';
import {
    useEffect
  } from 'react';


function HomePage (auth) {
    const {colorMode, toggleColorMode} = useColorMode();
    console.log("HP", auth);
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

        <Center>
            <Flex direction="column">
        <Box>
            <HomePageTitle/>
        </Box>
        
        <Box>
            <FactsBox/>
        </Box>

        <Box>
            <MatchCard auth={auth}/>
            {/* <ReturnMatchedPerson/> */}
        </Box>
        </Flex>
        </Center>

      </VStack>
    </Container>
    
  )
}

        

export default HomePage