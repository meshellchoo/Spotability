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



function HomePageTitle()
{
    const [userName, setUserName] = useState("");

    axios.get("http://127.0.0.1:8000/spotability/search-by-email?email=candywithonon@ymail.com").then((response) => {
        setUserName(response.data["display_name"]);
      });



    return(

        <Box maxW='35rem'>
            <Heading fontSize={25} >Welcome, {userName}! </Heading>
            <Heading fontSize={25} mb={-20}>Before we start, Here are some fun statistics!</Heading>
        </Box>
        
    )
}

export default HomePageTitle