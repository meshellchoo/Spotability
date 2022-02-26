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
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';

// Components
import Container from '../../container';
import Title from './helper-components/title';
import axios from 'axios';
import LoopObject from './helper-components/animation';

function LandingPage() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [desktopQuery] = useMediaQuery('(min-width: 700px)');
  const [isMinWidth, setIsMinWidth] = useState(false);
  const [spotifyAuthData, setSpotifyAuthData] = useState(null);
  const [spotifyAuthLink, setSpotifyAuthLink] = useState('');

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/spotability/spotify-url/')
      .then(({ data }) => {
        setSpotifyAuthData(data);
        setSpotifyAuthLink(data.url);
      });
  }, []);

  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  return (
    <Container>
      <VStack>
        <Box mt={10} p={2}>
          <IconButton
            size="lg"
            colorScheme={colorMode === 'dark' ? 'pink' : 'none'}
            variant={colorMode === 'dark' ? 'solid' : 'outline'}
            shadow="md"
            borderRadius="full"
            onClick={toggleColorMode}
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            border="2px"
          ></IconButton>
        </Box>

        <Box>
          <Image
            size="xl"
            src={
              colorMode === 'dark'
                ? '/spotability-logo-dark.png'
                : '/spotability-logo-light.png'
            }
          ></Image>

          <Title />
        </Box>

        <Box>
          <Flex mt="50px">
            <VStack>
              <Center>
                <HStack>
                  <Flex direction="row">
                    <Box mx={3}>
                      <Heading
                        fontSize="2xl"
                        color={colorMode === 'dark' ? 'pink.100' : 'blackAlpha'}
                      >
                        Discover your matches.
                      </Heading>
                    </Box>
                    <Flex
                      direction="row"
                      display={['none', 'none', 'flex', 'flex']}
                    >
                      <Box mx={5} display={isMinWidth === true}>
                        <LoopObject />
                      </Box>
                    </Flex>
                  </Flex>

                  <Box>
                    <Button
                      as="a"
                      href={spotifyAuthLink}
                      _hover={{ bg: '#86f29a' }}
                      // size={isMinWidth === true ? 'xl' : 'lg'}
                      shadow="lg"
                      bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
                    >
                      <Heading
                        color="#000"
                        fontSize={isMinWidth === true ? 'lg' : 'md'}
                      >
                        Login with Spotify
                      </Heading>
                    </Button>
                  </Box>
                </HStack>
              </Center>
              <Box>
                <Image
                  mt={isMinWidth === true ? '0px' : '-100px'}
                  width="550px"
                  height="550px"
                  src="./landing-page-image.svg"
                ></Image>
              </Box>
            </VStack>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
}

export default LandingPage;
