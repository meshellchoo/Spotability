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

import {useEffect
} from 'react';

import axios from "axios";

import App from "../../../App"

function HomePageTitle(email)
{
    console.log("em" , email.email.email)
    const [userName, setUserName] = useState("");
    const [authEmail, setAuthEmail ] = useState("");
    useEffect(() => {
      setAuthEmail(email.email.email);
    }, []);
    

    axios.get("http://127.0.0.1:8000/spotability/search-by-email?email=candywithonon@ymail.com").then((response) => {
        setUserName(response.data["display_name"]);
    });


    return(

      <Flex direction="column">
        <Box>
            <Heading fontSize="5xl" textAlign="left" fontWeight="bold">
              Welcome, {userName}! 
            </Heading>
            <Text fontSize={27} mb={10}>Before we start, here are some fun statistics...</Text>
        </Box>
      </Flex>
    )
}

export default HomePageTitle