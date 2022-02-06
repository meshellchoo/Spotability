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
import delayAdapterEnhancer from 'axios-delay';
import App from "../../../App"

// function Rec()
// {
//     const [recArtist, setRecArtist] = useState("");

//     const [recTrack, setRecTrack] = useState("");

//     const [recImage, setRecImage] = useState("");

//     axios.get("http://127.0.0.1:8000/spotability/get_recommended_track?email=candywithonon@ymail.com").then((response) => {
        
//         setRecArtist(response.data["artist"]);
//         setRecTrack(response.data["title"]);
//         setRecImage(response.data["img_url"]);

        
        
        
//       });
    
//     return recTrack
// }




function FactsBox ()
{

    
    
    const {colorMode, toggleColorMode} = useColorMode();

    const [userTopGenres, setUserTopGenres] = useState("");

    const [userFavoriteGenre, setUserFavoriteGenre] = useState("");

    const [userRecTrack, setUserRecTrack] = useState("");

    const [FavArtist, setFavArtist] = useState("");

    const [recTrack, setRecTrack] = useState("");

    const [recImage, setRecImage] = useState("");

    const [thirdRec, setThirdRec] = useState("");

    const [thirdImg, setThirdImag] = useState("");



    axios.get("http://127.0.0.1:8000/spotability/search-by-email?email=" + App.email).then((response) => {
        
        
        setUserTopGenres(response.data["top_genres"]);
        
        if (userTopGenres)
        {
            setUserFavoriteGenre(userTopGenres[0])
        }
      });

      axios.get("http://127.0.0.1:8000/spotability/top_artist?email=" + App.email).then((response) => {
        setFavArtist(response.data["name"]);
        
      });

      axios.get("http://localhost:8000/spotability/top_track?email=" + App.email).then((response) => {
        
        setThirdRec(response.data["name"])

        console.log(thirdRec)

        setThirdImag(response.data["images"])
      });

      
      
    

    return(
        <Flex direction="column">
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
                            You favorite artist: {FavArtist}
                        </Text>    
                    </Center>
                    </WrapItem>
                <WrapItem>
                
                    <Center w='150px' h='250px' bg={colorMode ==='dark'? "pink" : "#ffffff"}>
                        <Text textAlign='center' fontWeight='bold' color={colorMode ==='dark'? "black" : "black"}>
                            You love:  {thirdRec}
                        </Text>    
                    </Center>
                </WrapItem>
            </Wrap>

            <Image width="400" height="500" src="../header-component-girl.svg">

            </Image>

        </HStack>
        </Flex>
    )
}




export default FactsBox