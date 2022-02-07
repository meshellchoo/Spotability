
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
  HStack,
  Center,
  Avatar,
  Button,
  Img,
  Text,
  useStyleConfig,
} from '@chakra-ui/react';

import {  useState, useEffect} from 'react';

import axios from "axios";

import {SmallCloseIcon} from "@chakra-ui/icons"
import Like from './likeButton';
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
  const [matchedEmail, setMatchedEmail] = useState("");
  const [foundMatch, setFoundMatch] = useState(false);

  const [nullCheck, setNullCheck] = useState(false);


  const [matchedPeople, setMatchedPeople] = useState([]);
  // const userEmail = "candywithonon@ymail.com"
  const userEmail = "xinwng3@gmail.com";

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
        waiting_match_details();
  }

  const waiting_match_details = async() => {
    if (foundMatch === false)
    {
      const response = await axios.get("http://127.0.0.1:8000/spotability/get_a_match?email=xinwng3@gmail.com");
      callResponse(response.data.match);

     
    }
  }

  function callResponse(matchedData)
  {
      console.log("Found")
      setFoundMatch(true);
      setMatchButtonClick(false);
      setNullCheck(matchedData);
      setMatchedData(matchedData);
      setMatchedName(matchedData["display_name"])
      setMatchedImage(matchedData["img_url"])
      setMatchedCountry(matchedData["country"])
      setMatchedEmail(matchedData["email"])
  }

  function handleMatchButtonClick()
  {
    setMatchButtonClick(true);
    setCancelButtonClick(true);
    setNullCheck(true);
  }

  function handleCancelButtonClick()
  {
    setCancelButtonClick(true);
    setMatchButtonClick(false);
  }


  return (
    <Container>
    <Flex direction="column" >
      <HStack spacing={10}>
        <Box
          p="51px"
          width="300px"
          height="500px"
          rounded="20px"
          shadow="lg"
          bg={(colorMode === 'dark' ? '#fcd5ce' : '#fff')}>
            <Flex alignItems="center">
              <VStack>
                <Box mt={2}>
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
                    <Box position="relative">
                      <Button
                        mt={5}
                        // spinner={<BeatLoader size={8} color='white' />}
                        onClick={handleMatchButtonClick}
                        isLoading={matchButtonClick ? true: false}
                        
                        // colorScheme='teal'
                        variant={colorMode ==='dark'? "solid" : "outline"} 
                        size="lg"
                        colorScheme={colorMode ==='dark'? "pink" : "none"} 
                        border={colorMode ==='dark'? "0px" : "2px"} 
                        _hover={{color:"pink"}}
                      >
                        <Text fontWeight="medium" size="1.5xl">Ready to match?</Text>
                      </Button>
                    </Box>
                    <Box>
                  
                  

                    <IconButton
                        my={5}
                        borderRadius="full"
                        aria-label='Cancel'
                        width={30}
                        height={30}
                        variant={colorMode ==='dark'? "solid" : "outline"} 
                        colorScheme={colorMode ==='dark'? "pink" : "none"} 
                        onClick={handleCancelButtonClick}
                        icon={<SmallCloseIcon/>}
                        _hover={{color:"pink"}}
                        border={colorMode ==='dark'? "0px" : "2px"} 
                      >
                    </IconButton>
                  </Box>
                  
              </VStack>
              </Flex>
              </Box>

              <Box
                p="35px"
                width="300px"
                height="500px"
                rounded="20px"
                shadow="lg"
                bg={(colorMode === 'dark' ? '#fcd5ce' : '#fff')}
                display={foundMatch === false ? false : true}>
                <VStack>
                  <Heading mb={3} fontSize = "4xl" color="black">
                    Your Matches
                  </Heading>
                <Img
                src={matchedImage}
                borderRadius = "full"
                >

                </Img>

                  <Text fontSize="3xl" fontWeight="medium" color="black">
                    {matchedName}
                  </Text>
                  <Text fontSize="lg" fontWeight="small" color="black">
                    {matchedCountry}
                  </Text>
                      <Button
                        mt={7}
                        // spinner={<BeatLoader size={8} color='white' />}
                        onClick={handleMatchButtonClick}
                        
                        // colorScheme='teal'
                        variant={colorMode ==='dark'? "solid" : "outline"} 
                        size="lg"
                        colorScheme={colorMode ==='dark'? "pink" : "none"} 
                        border={colorMode ==='dark'? "0px" : "2px"} 
                        _hover={{color:"pink"}}
                      >
                        <Text fontWeight="medium" size="1.5xl">Contact</Text>
                      </Button>
                  </VStack>
                  </Box>
                </HStack>
            
        
      </Flex>
      </Container>
          
  )
}  
