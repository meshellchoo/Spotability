
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


function FactItem({ title, fact_data, icon, ...rest}) {
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
                    <Text align="justify">{fact_data}</Text>
                </HStack>
                </Box>
            </Stack>
            </HStack>
            </Box>
        </Flex>
    )
}

// function FetchUserInfo ()
// {
//     axios.get("http://127.0.0.1:8000/spotability/search-by-email?email=" + localStorage.getItem('email')).then((response) => {
//         setUserTopGenres(response.data["top_genres"]);
        
//         if (userTopGenres)
//         {
//             console.log(userTopGenres[0])
//             setUserFavoriteGenre(userTopGenres[0])
//         }
//       });

//     axios.get("http://127.0.0.1:8000/spotability/get_top_artist?email=" + localStorage.getItem('email')).then((response) => {
//         setFavArtist(response.data["top_artist"]["name"]);
//     });
    
//     //   {"top_track_from_top_genre"{"name":name, "artist": artist, "images":images}
//     axios.get("http://localhost:8000/spotability/get_top_track_from_top_genre?email=" + localStorage.getItem('email')).then((response) => {
//         setThirdRec(response.data["top_track_from_top_genre"]["name"])
//         console.log(thirdRec)
//         setThirdImag(response.data["top_track_from_top_genre"]["images"])
//       });
// }

function FactsComponent()
{
    const {colorMode, toggleColorMode} = useColorMode();
    const [userData, setUserData] = useState([])
    const [userFavoriteGenre, setUserFavoriteGenre] = useState("");
    const [userTopGenres, setUserTopGenres] = useState("");
    const [userRecTrack, setUserRecTrack] = useState("");
    const [userFavArtist, setFavArtist] = useState("");
    const [recTrack, setRecTrack] = useState("");
    const [recImage, setRecImage] = useState("");
    const [thirdRec, setThirdRec] = useState("");
    const [thirdImg, setThirdImag] = useState("");

    const [desktopQuery] = useMediaQuery("(min-width: 700px)");
    const [isMinWidth, setIsMinWidth] = useState(false);
    
    useEffect(() => {
        if(desktopQuery !== isMinWidth){
        setIsMinWidth(desktopQuery);
        }
    }, [isMinWidth, desktopQuery])
    
    axios.get("http://127.0.0.1:8000/spotability/search-by-email?email=" + localStorage.getItem('email')).then((response) => {
        setUserTopGenres(response.data["top_genres"]);
        if (userTopGenres)
        {
            setUserFavoriteGenre(userTopGenres[0])
        }
    });

    axios.get("http://127.0.0.1:8000/spotability/get_top_artist?email=" + localStorage.getItem('email')).then((response) => {
        setFavArtist(response.data["top_artist"]["name"]);
    });
    
    axios.get("http://localhost:8000/spotability/get_top_track_from_top_genre?email=" + localStorage.getItem('email')).then((response) => {
        setThirdRec(response.data["top_track_from_top_genre"]["name"])
        console.log(thirdRec)
        setThirdImag(response.data["top_track_from_top_genre"]["images"])
    });
    
    return (
        <Flex direction="column" my={5}>
            <HStack>
                <Box mt={-10}>
                <VStack>
                    <Box>
                        <FactItem title="Your favorite genre is... " song_data={userFavoriteGenre} icon="../../home-fav-genre.png">
                        </FactItem>
                    </Box>

                    <Box>
                        <FactItem title="Your favorite artist is... " song_data={userFavArtist} icon="../../home-fav-artist.png">
                        </FactItem>
                    </Box>

                    <Box>
                        <FactItem title="Try listening to... " song_data={userRecTrack} icon="../../home-rec-track.png">
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

// function FactsBox ()
// {
//     const {colorMode, toggleColorMode} = useColorMode();
//     const [userTopGenres, setUserTopGenres] = useState("");
//     const [userFavoriteGenre, setUserFavoriteGenre] = useState("");
//     const [userRecTrack, setUserRecTrack] = useState("");
//     const [FavArtist, setFavArtist] = useState("");
//     const [recTrack, setRecTrack] = useState("");
//     const [recImage, setRecImage] = useState("");
//     const [thirdRec, setThirdRec] = useState("");
//     const [thirdImg, setThirdImag] = useState("");



      
      
    

//     return(
//         <Flex direction="column">
//             <HStack>
            
//             <Box>
//                 <WrapItem>
//                     <Center w='150px' h='250px' bg={colorMode ==='dark'? "pink" : "#ffffff"}>
//                         <Text textAlign='center' fontWeight='bold' color={colorMode ==='dark'? "black" : "black"}>
//                             Your favorite genre is:
//                              {userFavoriteGenre}
//                         </Text>
//                     </Center>
//                 </WrapItem>
//                 <WrapItem>
//                     <Center w='150px' h='250px' bg={colorMode ==='dark'? "pink" : "#ffffff"}>
//                         <Text textAlign='center' fontWeight='bold' color={colorMode ==='dark'? "black" : "black"}>
//                             You favorite artist: {FavArtist}
//                         </Text>    
//                     </Center>
//                     </WrapItem>
//                 <WrapItem>
                
//                     <Center w='150px' h='250px' bg={colorMode ==='dark'? "pink" : "#ffffff"}>
//                         <Text textAlign='center' fontWeight='bold' color={colorMode ==='dark'? "black" : "black"}>
//                             You love:  {thirdRec}
//                         </Text>    
//                     </Center>
//                 </WrapItem>
//             </Box>

//         </HStack>
//         </Flex>
//     )
// }




export default FactsComponent