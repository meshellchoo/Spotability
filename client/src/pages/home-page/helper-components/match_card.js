
import {
  Box,
  Stack,
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
  useStyleConfig,
} from '@chakra-ui/react';

import {  useState, useEffect} from 'react';

import axios from "axios";

import {SmallCloseIcon} from "@chakra-ui/icons"

import Container from '../../../container';
import ReturnMatchedPerson from './match_details';




export default function MatchCard()
{
  // const [userEmail, setUserEmail] = useState("")
  const [matchButtonClick, setMatchButtonClick] = useState(false);
  const [cancelButtonClick, setCancelButtonClick] = useState(true);
  const [userData, setUserData] = useState("");
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const {colorMode, toggleColorMode} = useColorMode();

  const [matchedData, setMatchedData] = useState("");
  const [matchedName, setMatchedName] = useState("");
  const [matchedImage, setMatchedImage] = useState("");
  const [matchedCountry, setMatchedCountry] = useState("");
  
  // setUserEmail("candywithonon@ymail.com");
  const userEmail = "candywithonon@ymail.com"

  // useEffect(() => {
  //   async function handle_user_data()
  //   {
  //     await axios.get("http://127.0.0.1:8000/spotability/search-by-email?email=candywithonon@ymail.com").then((response) => {
      
  //   },
  // });
  // if(response.data)
  // {
  //   handleUserData(response.data);
  // }
  // }, []);

  useEffect(() => {
    async function handle_user_data() {
      const url = "http://127.0.0.1:8000/spotability/search-by-email?";
      const { data } = await axios.get(`${url}email=${userEmail}`, {});
      // console.log(data);
      if (data) {
        updateUserData(data);
      }
    }
    handle_user_data();
  }, [userData, setUserData]);

  function updateUserData(e) 
  {
        setUserData(e);
        console.log(userData);
        setUserName(userData["display_name"])
        setUserImage(userData["img_url"])
        setUserCountry(userData["country"])
  }
  // axios.get("http://127.0.0.1:8000/spotability/search-by-email?email=candywithonon@ymail.com").then((response) => {
  //       setUserData(response.data);
        
  //       // console.log(userData);
  //       setUserName(userData["display_name"])
  //       setUserImage(userData["img_url"])
  //       setUserCountry(userData["country"])
  //       // console.log(userData["top_genres"])
  // });

  function ReturnMatchDetails(email)
  {
    useEffect(() => {
    axios.get("http://127.0.0.1:8000/spotability/get_a_match?email=candywithonon@ymail.com").then((response) => {
          setMatchedData(response.data);
      // console.log(userData);
      setMatchedName(matchedData["display_name"])
      console.log("FOUND", matchedData)
      setMatchedImage(matchedData["img_url"])
      setMatchedCountry(userData["country"])
  })
}, []);

  }


  function handleMatchButtonClick()
  {
    setMatchButtonClick(true);
    ReturnMatchDetails(userEmail);
    setCancelButtonClick(true);
  }

  function handleCancelButtonClick()
  {
    setCancelButtonClick(true);
    setMatchButtonClick(false);
  }


  return (
    <Flex direction="column">
      <Container>
      <VStack>
        <Center>
        <Box
          p="50px"
          rounded="20px"
          overflow="hidden"  
          shadow="lg"
          bg={(colorMode === 'dark' ? '#fcd5ce' : '#fff')}>
            <Flex alignItems="center">
              <VStack>
                <Box mt={5}>
                  <Image 
                    mt={3}
                    src={userImage ? userImage: "none"}
                    // src={userImage}
                    rounded='full'
                    w={32}
                    h={32}
                    boxShadow='md'>
                  </Image>
                  </Box>
                  <Text fontSize="3xl" fontWeight="medium" color="black">
                    {userName}
                  </Text>
                  <Text fontSize="xl" fontWeight="small" color="black">
                    {userCountry}
                  </Text>
                  
                  <Box
                  position="relative">
                    <Button
                      mt={5}
                      // spinner={<BeatLoader size={8} color='white' />}
                      onClick={handleMatchButtonClick}
                      isLoading={matchButtonClick ? true: false}
                      loadingText="Matching..."
                      // colorScheme='teal'
                      variant={colorMode ==='dark'? "solid" : "outline"} 
                      size="lg"
                      colorScheme={colorMode ==='dark'? "pink" : "none"} 
                      border={colorMode ==='dark'? "0px" : "2px"} 
                    >
                      <Text fontWeight="medium" size="1.5xl">Ready to match?</Text>
                    </Button>
                    </Box>
                    
                    <Box>
                      <IconButton
                        // spinner={<BeatLoader size={8} color='white' />}
                        my={5}
                        borderRadius="full"
                        aria-label='Cancel'
                        // display={cancelButtonClick ? false: true}
                        variant={colorMode ==='dark'? "solid" : "outline"} 
                        colorScheme={colorMode ==='dark'? "pink" : "none"} 
                        onClick={handleCancelButtonClick}
                        icon={<SmallCloseIcon/>}
                        border={colorMode ==='dark'? "0px" : "2px"} 
                      >
                    </IconButton>
                  </Box>
              </VStack>
            </Flex>
        </Box>
        </Center>
      </VStack>
       <VStack>
        <Center>
        <Box
          p="50px"
          rounded="20px"
          overflow="hidden"  
          shadow="lg"
          bg={(colorMode === 'dark' ? '#fcd5ce' : '#fff')}>
            <Flex alignItems="center">
              <VStack>
                <Box mt={5}>
                  <Image 
                    mt={3}
                    // src={userImage ? userImage: "none"}
                    src={matchedImage}
                    rounded='full'
                    w={32}
                    h={32}
                    boxShadow='md'>
                  </Image>
                  </Box>
                  <Text fontSize="3xl" fontWeight="medium" color="black">
                    {matchedName}
                  </Text>
                  <Text fontSize="xl" fontWeight="small" color="black">
                    {matchedCountry}
                  </Text>
                  
                  <Box
                  position="relative">
                    <Button
                      mt={5}
                      // spinner={<BeatLoader size={8} color='white' />}
                    >
                      Test
                    </Button>
                    </Box>
                    
                    <Box>
                      <IconButton
                        // spinner={<BeatLoader size={8} color='white' />}
                        my={5}
                        borderRadius="full"
                        aria-label='Cancel'
                        // display={cancelButtonClick ? false: true}
                      >
                    </IconButton>
                  </Box>
              </VStack>
            </Flex>
        </Box>
        </Center>
      </VStack>



      </Container>
      </Flex>
  )
  }  
