
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
  Spinner,
  HStack,
  Center,
  Avatar,
  Button,
  Img,
  Text,
  useStyleConfig,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import {  useState, useEffect} from 'react';
import axios from "axios";

import {CloseIcon, SmallCloseIcon} from "@chakra-ui/icons"
import Container from '../../../container';
import ReturnMatchedPerson from './match_details';

function UserInfoLoading() {
  return (
    <VStack>
      <Box align="center" my={10} >
      <Text color="black" fontWeight="medium" fontSize="2xl">
        One second, we're fetching your profile...
      </Text>
      </Box>
    <Spinner size="lg" color="black">

    </Spinner>
    </VStack>
  )
}


export default function MatchCard()
{
  // const [userEmail, setUserEmail] = useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()
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

  const[email,setEmail] = useState("");
  const [matchedPeople, setMatchedPeople] = useState([]);


  React.useEffect(() => {
      setEmail(localStorage.getItem('email'))
      axios.get("http://127.0.0.1:8000/spotability/search-by-email?email=" + email).then((response) => {
        updateUserData(response.data);
        });
      if (userData) {
        console.log("userData is "  + userData)
      }


      axios.get("http://127.0.0.1:8000/spotability/get_a_match?email="+email).then((response) => {
        callResponse(response.data.match);
        });
      if (userData) {
        console.log("userData is "  + userData)
      }


  }, [])

  function updateUserData(e) {
        setUserData(e);
        console.log("userData[display_name]" + userData["display_name"])
        setUserName(userData["display_name"])
        setUserImage(userData["img_url"])
        setUserCountry(userData["country"])
        // waiting_match_details();
  }

  // const waiting_match_details = async() => {
  //   if (foundMatch === false){
  //     const response = await axios.get("http://127.0.0.1:8000/spotability/get_a_match?email="+email);
  //     callResponse(response.data.match); 
  //   }
  // }

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
    <Flex direction="column" alignContent={"center"}>
    <Stack>
      <HStack spacing={10}>
        <Box
          p="30px"
          // width="300px"
          // height="500px"
          rounded="20px"
          shadow="lg"
          bg={(colorMode === 'dark' ? '#fcd5ce' : '#fff')}>
            <Flex alignItems="center">
              <VStack>
                <Box mt={2}>
                  {userImage ?  <Image 
                    mt={3}
                    src={userImage ? userImage: "none"}
                    shadow="lg"
                    // src={userImage}
                    rounded='full'
                    w={32}
                    h={32}
                    boxShadow='md'>
                  </Image> : <UserInfoLoading></UserInfoLoading>
                  }
                 
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
                        onClick={onOpen}
                        shadow="lg"
                        variant={colorMode ==='dark'? "solid" : "ghost"} 
                        size="lg"
                        colorScheme="pink"
                        border={colorMode ==='dark'? "0px" : "2px"} 
                      >
                        <Text fontWeight="" size="1.5xl">Ready to match?</Text>
                      </Button>
                      
                      <Modal isOpen={isOpen} onClose={onClose} motionPreset="scale" size="full">
                        <Flex direction="column">
                        <ModalOverlay />
                        <ModalContent >
                          <ModalHeader>
                            <Center>
                            <Button as="heading" isLoading loadingText="Finding you a match..."></Button>
                            </Center>
                          </ModalHeader>
                          
                          <ModalBody>
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
                                      // onClick={handleMatchButtonClick}
                                      
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
                            
                            <Text>
                              Sociosqu ultrices viverra venenatis senectus cubilia semSociosqu ultrices viverra venenatis senectus cubilia sem
                            </Text>
                            {/* <Lorem count={2} /> */}
                          </ModalBody>

                          <ModalFooter>
                            <Center>
                              <Button
                                  onClick={onClose}
                                  borderRadius="full"
                                  aria-label='Cancel'
                                  // width={30}
                                  // height={30}
                                  variant={colorMode ==='dark'? "solid" : "ghost"} 
                                  colorScheme={colorMode ==='dark'? "pink" : "none"} 
                                  rightIcon={<CloseIcon/>}
                                  border={colorMode ==='dark'? "0px" : "2px"} 
                                >
                                  Cancel Search
                              </Button>
                            </Center>
                          </ModalFooter>

                        </ModalContent>
                        </Flex>
                      </Modal>
                    </Box>
                    <Box>
                  
                  

                  </Box>
                  
              </VStack>
              </Flex>
              </Box>

              {/* <Box
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
                        // onClick={handleMatchButtonClick}
                        onClick={<MatchDetailsModal></MatchDetailsModal>}
                        
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
                  </Box> */}
                </HStack>
            
        
        
      </Stack>
      </Flex>
          
  )
}  
