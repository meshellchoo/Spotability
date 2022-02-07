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

    axios.get("http://127.0.0.1:8000/spotability/search-by-email?email=" + localStorage.getItem('email')).then((response) => {
        
        
        setUserTopGenres(response.data["top_genres"]);
        
        if (userTopGenres)
        {
            console.log(userTopGenres[0])
            setUserFavoriteGenre(userTopGenres[0])
        }
      });

      axios.get("http://127.0.0.1:8000/spotability/get_top_artist?email=" + localStorage.getItem('email')).then((response) => {
        setFavArtist(response.data["top_artist"]["name"]);
        
      });
      
    //   {"top_track_from_top_genre"{"name":name, "artist": artist, "images":images}
      axios.get("http://localhost:8000/spotability/get_top_track_from_top_genre?email=" + localStorage.getItem('email')).then((response) => {
        
        setThirdRec(response.data["top_track_from_top_genre"]["name"])

        console.log(thirdRec)

        setThirdImag(response.data["top_track_from_top_genre"]["images"])
      });

      
      
    

    return(
        <Flex direction="column">
        <HStack borderRadius="20px">
            <Wrap >
                <WrapItem>
                    <Center w='150px' h='250px' bg={colorMode ==='dark'? "pink" : "#ffffff"}>
                        <Text textAlign='center' fontWeight='bold' color={colorMode ==='dark'? "black" : "black"}>
                            Your favorite genre is:
                             {userFavoriteGenre}
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

            <Image width="400" height="480" src="../../header-component-girl.svg">

            </Image>

        </HStack>
        </Flex>
    )
}




export default FactsBox