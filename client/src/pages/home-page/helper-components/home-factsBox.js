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
  HStack,
} from '@chakra-ui/react';
import {
  SunIcon,
  MoonIcon, 
} from '@chakra-ui/icons'


import axios from "axios";


function FactsBox ()
{

    const {colorMode, toggleColorMode} = useColorMode();

    const [userTopGenres, setUserTopGenres] = useState("");

    const [userFavoriteGenre, setUserFavoriteGenre] = useState("");

    axios.get("http://127.0.0.1:8000/spotability/search-by-email?email=candywithonon@ymail.com").then((response) => {
        setUserTopGenres(response.data["top_genres"]);
        //console.log(userTopGenres);
        if (userTopGenres)
        {
            setUserFavoriteGenre(userTopGenres[0])
        }
      });

      
    

    return(
        <HStack>
            <Wrap>
                <WrapItem>
                    <Center w='150px' h='250px' bg={colorMode ==='dark'? "pink" : "#ffffff"}>
                        <Text textAlign='center' fontWeight='bold' color={colorMode ==='dark'? "black" : "black"}>
                            Your favorite genre is {userFavoriteGenre}
                        </Text>
                    </Center>
                </WrapItem>

                <WrapItem>
                    <Center w='150px' h='250px' bg={colorMode ==='dark'? "pink" : "#ffffff"}>
                        <Text textAlign='center' fontWeight='bold' color={colorMode ==='dark'? "black" : "black"}>
                            You are beautifuy Yourself you are nice
                        </Text>    
                    </Center>
                    </WrapItem>
                <WrapItem>
                    <Center w='150px' h='250px' bg={colorMode ==='dark'? "pink" : "#ffffff"}>
                        <Text textAlign='center' fontWeight='bold' color={colorMode ==='dark'? "black" : "black"}>
                            You are beautifuy Yourself you are nice
                        </Text>    
                    </Center>
                </WrapItem>
                    
            </Wrap>

            <Image boxSize={450} src="../header-component-girl.svg">

            </Image>

        </HStack>
    )
}

export default FactsBox