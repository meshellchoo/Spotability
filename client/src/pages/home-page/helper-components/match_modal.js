
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
import MatchCard from './match_card';
import {CloseIcon, SmallCloseIcon} from "@chakra-ui/icons"
import Container from '../../../container';
import ReturnMatchedPerson from './match_details';
import { CardSwiper } from "react-card-rotate-swiper";

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


export default function MatchModal({userObject})
{
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [matchButtonClick, setMatchButtonClick] = useState(false);
  const [cancelButtonClick, setCancelButtonClick] = useState(true);
  
  const [userData, setUserData] = useState(userObject["data"]);
  const [userName, setUserName] = useState(userData["display_name"]);
  const [userImage, setUserImage] = useState(userData["img_url"]);
  const [userCountry, setUserCountry] = useState(userData["country"]);
  const [userEmail, setUserEmail] = useState(userData["email"]);
  const {colorMode, toggleColorMode} = useColorMode();

  const [matchedData, setMatchedData] = useState("");
  const [matchedName, setMatchedName] = useState("");
  const [matchedImage, setMatchedImage] = useState("");
  const [matchedCountry, setMatchedCountry] = useState("");
  const [matchedEmail, setMatchedEmail] = useState("");
  const [matchedGenre, setMatchedGenre] = useState("");
  const [foundMatch, setFoundMatch] = useState(false);

  const [nullCheck, setNullCheck] = useState(false);
  const [matchedPeople, setMatchedPeople] = useState([]);


  React.useEffect(() => {
      axios.get("http://127.0.0.1:8000/spotability/get_a_match?email=" + userEmail).then((response) => {
        callResponse(response.data.match);
        });
  }, [])

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
      setMatchedGenre(matchedData["overlapping_genre"])
  }

  function handleMatchButtonClick()
  {
    setMatchButtonClick(true);
    setCancelButtonClick(true);
    setNullCheck(true);
    axios.get("http://127.0.0.1:8000/spotability/like_match?email="+ userEmail + "&liked_match=" + matchedEmail)

  }
  function handleRejectButtonClick()
  {
    axios.get("http://127.0.0.1:8000/spotability/reject_match?email="+ userEmail + "&rejected_match=" + matchedEmail)
  }

  function handleCancelButtonClick()
  {
    setCancelButtonClick(true);
    setMatchButtonClick(false);
  }
  const handleSwipe = (direction) => {
    if(direction == "left"){
      handleRejectButtonClick()
    }else{
      handleMatchButtonClick()
    }
  };
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
                        
                        <Modal isOpen={isOpen} onClose={onClose} motionPreset="scale" size="full"  >
                          <Flex direction="column">
                          <ModalOverlay />
                          <ModalContent bg={(colorMode === 'dark' ? '#121212' : '#fcd5ce')}>
                            <ModalHeader >
                              <Center>
                              {/* <Button as="heading" isLoading loadingText="Match Found"></Button> */}
                              </Center>
                            </ModalHeader>
                              <ModalBody >
                                <CardSwiper
                                  onSwipe={(e) => handleSwipe(e,matchedEmail)}
                                  contents={<MatchCard matchedObject={matchedData}/>}
                              />  
                              <Center>
                              <Box
                                w='40%'
                                p={5}
                                bgColor="pink"
                                color="black"
                                borderColor={colorMode === 'dark' ? 'none' : 'pink.200'}
                                shadow="lg"
                                my={35}
                                borderRadius="20px"
                                borderWidth="1.5px"
                                // borderWidth={colorMode==='dark' ? '2.5px' : "none"}
                                >
                                <Center>
                                  <Text fontSize="3xl" fontWeight="medium" color="black">
                                        The genre that brings you both together is
                                  </Text>
                                </Center>
                                <Center>
                                  <Text fontSize="3xl" fontWeight="medium" color="black" >
                                          {matchedGenre}
                                  </Text> 
                                </Center>
                                </Box>
                                </Center>
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
                  </HStack>
              
          
          
        </Stack>
        </Flex>
  )
}  
