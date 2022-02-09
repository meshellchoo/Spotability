
import {
    Box,
    VStack,
    Flex,
    useColorMode,
    Image,
    Text,
    Stack,
    useMediaQuery,
    Spacer,
    HStack,
    useColorModeValue,
} from '@chakra-ui/react';

import {
  SunIcon,
  MoonIcon, 
} from '@chakra-ui/icons'

import { useState, useEffect } from 'react';
import React from 'react';
import axios from "axios";

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


function FactItem({ title, song_data, icon, ...rest}) {
    const [desktopQuery] = useMediaQuery("(min-width: 700px)");
    const {colorMode, toggleColorMode} = useColorMode();
    const colors = useColorModeValue('#fff', '#000')
    const bgColors = useColorModeValue('linear-gradient(315deg, #485461 0%, #28313b 74%)', 'none')
    return (
        <Flex direction="column">
            <Box
            maxHeight="350px"
            minWidth="300px"
            p={3}
            bgColor="pink"
            color="black"
            borderColor={colorMode === 'dark' ? 'none' : 'pink.200'}
            shadow="lg"
            my={1}
            borderRadius="20px"
            borderWidth="1.5px"
            // borderWidth={colorMode==='dark' ? '2.5px' : "none"}
            {...rest}
            >
            <HStack>
                <Image width="35px" height="35px" mx={1} src={icon} ></Image>  
                <Stack>
                <Box p={2}>
                <Text fontSize='lg'>{title}</Text>
                <HStack spacing={4}>
                    <Text fontSize='lg' align="justify">{song_data}</Text>
                </HStack>
                </Box>
            </Stack>
            </HStack>
            </Box>
        </Flex>
    )
}


function FactsComponent({userObject}){
    const {colorMode, toggleColorMode} = useColorMode();
    const [userTopGenres, setUserTopGenress] = useState(userObject["data"]["top_genres"]);
    const [userRecTrackObj, setUserRecTrackObj] = useState(userObject["data"]["recommended_tracks"]);
    const [userTopArtistObj, setUserTopArtistObj] = useState(userObject["data"]["top_artist"]);
    const [desktopQuery] = useMediaQuery("(min-width: 700px)");
    const [isMinWidth, setIsMinWidth] = useState(false);
    useEffect(() => {
        if(desktopQuery !== isMinWidth){
        setIsMinWidth(desktopQuery);
        }
    }, [isMinWidth, desktopQuery])

    return (
    
        <Flex direction="column" my={5}>
            <HStack>
                <Box mt={-10}>
                <VStack>
                    <Box>
                        <FactItem title="Your favorite genre is... " song_data={userTopGenres[0]} icon="../../home-fav-genre.png">
                        </FactItem>
                    </Box>

                    <Box>
                        <FactItem title="Your favorite artist is... " song_data={userTopArtistObj["artist"]} icon={userTopArtistObj["img_url"]}>
                        </FactItem>
                    </Box>

                    <Box>
                        <FactItem title="Try listening to... " song_data={userRecTrackObj["track_title"]} icon={userRecTrackObj["img_url"]}>
                        </FactItem>
                    </Box>
                </VStack>
                </Box>
                <Spacer/>
                <Box>
                    <Image 
                    mt="30px" width="450" height="450" src="../../header-component-girl.svg" 
                    display={isMinWidth ? "flex" : "none"}/>
                </Box>
            </HStack>
        </Flex>

    )
}

export default FactsComponent