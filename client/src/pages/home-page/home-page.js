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

import HomePageTitle from "./helper-components/home-title"

import FactsBox from './helper-components/home-factsBox';

import {
    useEffect
  } from 'react';

function HomePage () {
  
  
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
            
            <HomePageTitle/>
            
            <FactsBox/>
            
            <Flex my="40px"/>
            
            <Flex my="40px"/>
        </Flex>
    </VStack>
    
  )
}

export default HomePage