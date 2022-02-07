import React from 'react';
import {
  Box,
  VStack,
  Flex,
  useColorMode,
  HStack,
  Center,
  Image,
  IconButton,
  Link,
  useMediaQuery,
  Heading,
  Button, 
  Text,
  Spinner,
} from '@chakra-ui/react';
import {
  SunIcon,
  MoonIcon, 
} from '@chakra-ui/icons'
import {
  useState, useEffect
} from 'react';

// Components
import Container from '../../container';
import Title from './helper-components/title';
import axios from "axios";
import LoopObject from './helper-components/animation';

function LandingPage () {
  const {colorMode, toggleColorMode} = useColorMode();
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isDesktop, setIsDesktop] = useState(false);
  const [spotifyAuthData, setSpotifyAuthData] = useState(null);
  const [spotifyAuthLink, setSpotifyAuthLink] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/spotability/spotify-url/").then(({ data }) => {
      setSpotifyAuthData(data);
      setSpotifyAuthLink(data.url);
      setLoading(false)
    });
  }, []);

  if (isLoading) {
    return <div className="App">
      <Spinner  size='xl' color='red.500' />
    </div>;
  }

  return (
    <Container>
      <VStack>
        <Box my={10} p={2}>
          <IconButton 
          size="lg" 
          colorScheme={colorMode ==='dark'? "pink" : "none"} 
          variant={colorMode === 'dark' ? "solid" : "outline"} 
          shadow="md" borderRadius="full" 
          onClick={toggleColorMode} 
          icon={colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>} 
          border='2px'>
          </IconButton>
        </Box>

        <Box >
          <Title/>
        </Box>

        <Box>
          <Flex my="110px">
          <VStack>
              <Center>
                <HStack>
                    <Flex direction="row">
                      <Box mx={3}>
                        <Heading fontSize='3xl'color={colorMode ==='dark'? "pink" : "blackAlpha"}>
                            Discover your matches. 
                        </Heading>
                        </Box>
                        <Flex direction="row" display={["none", "none", "flex", "flex"]}>
                          <Box mx={5} display={isDesktop === 'true'}>
                            <LoopObject />
                          </Box>
                        </Flex>
                    </Flex>
                    
                    <Box >
                      <Button 
                        as="a"
                        href={spotifyAuthLink}
                        _hover={{ bg: '#86f29a' }}  
                        size={isDesktop === true ? 'lg': 'md'}
                        shadow='lg'
                        bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
                        > 
                        <Text color='#000' fontSize={isDesktop === true ? '1xl': 'md'} >
                          {isDesktop === true ? "Login with Spotify": "Login with Spotify"}
                        </Text> 
                      </Button>
                    </Box>
                  </HStack>
                </Center>
            </VStack>
          </Flex>
        </Box>

        <Box>
          <Image src="./landing-page-image.svg"></Image>
        </Box>
        
      </VStack>
  </Container>
  )
}

export default LandingPage