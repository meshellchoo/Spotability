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

import {
  useState, useEffect
} from 'react';

import axios from "axios";

import {SmallCloseIcon} from "@chakra-ui/icons"

function Card(props)
{
  const {variant, children,  ...rest} = props
  const styles = useStyleConfig('Card', {variant})
  return <Box _css={styles} {...rest} />
}


export default function MatchCard()
{
  // const [userEmail, setUserEmail] = useState("")
  const [matchButtonClick, setMatchButtonClick] = useState(false);
  const [cancelButtonClick, setCancelButtonClick] = useState(false);
  const [userData, setUserData] = useState("");
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const {colorMode, toggleColorMode} = useColorMode();
  
  // setUserEmail("candywithonon@ymail.com");
  const userEmail = "candywithonon@ymail.com"
  
  axios.get("http://127.0.0.1:8000/spotability/search-by-email?email=candywithonon@ymail.com").then((response) => {
        setUserData(response.data);
        
        // console.log(userData);
        setUserName(userData["display_name"])
        setUserImage(userData["img_url"])
        // console.log(userData["top_genres"])
  });

  function handleMatchButtonClick()
  {
    setMatchButtonClick(true);
    setCancelButtonClick(true);
  }

  function handleCancelButtonClick()
  {
    setCancelButtonClick(false);
    setMatchButtonClick(false);
  }


  return (
      <VStack>
        <Center>
        <Stack>
        <Box
          width="350px"
          height="600px"
          rounded="20px"
          overflow="hidden"
          shadow="lg"
          bg={(colorMode === 'dark' ? 'red.200' : '#ffffff')}>
          <VStack>
            <Flex alignItems="center">
              <VStack>
                <Box mt={5}>
                  <Image 
                  mt={5}
                  src='https://chakra-ui.com/eric.jpg'
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
                    Location
                  </Text>
                  <Box>
                    <Button
                      my={10}
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
                      <Text fontWeight="medium" size="2xl">Ready to match?</Text>
                    </Button>
                    </Box>
                    
                    <Box>
                    <IconButton
                      // spinner={<BeatLoader size={8} color='white' />}
                      mt={10}
                      borderRadius="full"
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
        </VStack>
          
        
        
        </Box>
        </Stack>
      </Center>
      </VStack>
  )
  }  
