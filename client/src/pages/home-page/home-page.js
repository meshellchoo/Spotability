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
import ReturnMatchedPerson from './helper-components/match_details';

import { useEffect } from 'react';


function HomePage (email) {
  console.log(email, "EMAIL")
  const {colorMode, toggleColorMode} = useColorMode();
  return (
        <VStack mb="50">
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

          <Flex direction="column">
            <Box>
                <HomePageTitle email={email}/>
            </Box>
          
            <Box my={10}>
                <FactsBox/>
            </Box>
            <Center>
              <Box alignContent="center" alignSelf="center">
                  <MatchCard email={email.email}/>
                  {/* <ReturnMatchedPerson/> */}
              </Box>
            </Center>
          </Flex>


      </VStack>

          
    
  )
}

        

export default HomePage