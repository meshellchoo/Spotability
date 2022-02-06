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
  HStack,
} from '@chakra-ui/react';
import {
  SunIcon,
  MoonIcon,
  EmailIcon, 
} from '@chakra-ui/icons'



// Components
import Container from '../../container';
import MatchCard from './helper-components/match_card';

import axios from "axios";

import HomePageTitle from "./helper-components/home-title"

import FactsBox from './helper-components/home-factsBox';


import Like from './helper-components/likeButton';

import Dislike from './helper-components/dislikeButton';


import ReturnMatchedPerson from './helper-components/match_details';

import {
    useEffect
  } from 'react';


    
function HomePage (auth) {
    console.log("HP", auth);
    const {colorMode, toggleColorMode} = useColorMode();
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

      
      
      <Like/>

      <Dislike/>
      


    </Container>

    
    
  )
}

        

export default HomePage