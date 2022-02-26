import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
  DotGroup,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  Box,
  VStack,
  Flex,
  useColorMode,
  Image,
  Text,
  Button,
  Stack,
  Tag,
  Center,
  useMediaQuery,
  Spacer,
  HStack,
  color,
} from '@chakra-ui/react';
// import './dot-group.css';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

function FactItems({
  type,
  artist_data,
  rec_songs_data,
  title,
  top_genres,
  icon,
  ...rest
}) {
  const [desktopQuery] = useMediaQuery('(min-width: 700px)');

  return (
    <Box
      borderRadius="lg"
      shadow="lg"
      p={3}
      mx={1}
      height={320}
      bgGradient={'linear-gradient(to right, #ffc3a0, #FFAFBD)'}
      color={'black'}
    >
      <Center>
        <Box my={4}>
          <Text fontWeight={'bold'} fontSize="2xl">
            {title}
          </Text>
        </Box>
      </Center>
      <Stack>
        <VStack>
          <Box mt={0}>
            <Image
              shadow="lg"
              borderRadius="full"
              width={type === 'artist' ? '130px' : '85px'}
              height={type === 'artist' ? '130px' : '85px'}
              src={icon}
            ></Image>
          </Box>
          <Box p={3}>
            <Stack spacing={4}>
              <Box>
                {type === 'genre'
                  ? top_genres.map(g => (
                      <Center>
                        <Text
                          fontWeight={'bold'}
                          color={'gray.900'}
                          fontSize={'xl'}
                        >
                          {g}
                        </Text>
                      </Center>
                    ))
                  : ''}

                {type === 'artist' ? (
                  <Center>
                    <Text fontWeight={'bold'} color="gray.900" fontSize={'xl'}>
                      {artist_data}
                    </Text>
                  </Center>
                ) : (
                  ''
                )}

                {type === 'rec_songs' ? (
                  <Center>
                    <Text fontWeight={'bold'} color="gray.900" fontSize={'xl'}>
                      {rec_songs_data}
                    </Text>
                  </Center>
                ) : (
                  ''
                )}
              </Box>
            </Stack>
          </Box>
        </VStack>
      </Stack>
    </Box>
  );
}

const FactsSliderContainer = ({ userObject }) => {
  const { colorMode } = useColorMode();
  const [desktopQuery] = useMediaQuery('(min-width: 700px)');
  const [isMinWidth, setIsMinWidth] = useState(false);
  const [userTopGenres, setUserTopGenress] = useState(
    userObject['data']['top_genres']
  );
  const [userRecTrackObj, setUserRecTrackObj] = useState(
    userObject['data']['recommended_tracks']
  );
  const [userTopArtistObj, setUserTopArtistObj] = useState(
    userObject['data']['top_artist']
  );
  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  return (
    <Box>
      <CarouselProvider
        naturalSlideWidth={150}
        naturalSlideHeight={160}
        totalSlides={3}
        dragEnabled={true}
        touchEnabled={true}
        visibleSlides={isMinWidth ? 2 : 1}
        isPlaying={false}
        isIntrinsicHeight={true}
        style={{ cursor: 'grabbing' }}
        // orientation={isMinWidth ? 'horizontal' : 'vertical'}
      >
        <Box mb={3}>
          <Slider>
            <Slide index={0}>
              <Box>
                <FactItems
                  type="genre"
                  title="Your top genres"
                  top_genres={[
                    userTopGenres[0],
                    userTopGenres[1],
                    userTopGenres[2],
                  ]}
                  icon="../../home-fav-genre.png"
                ></FactItems>
              </Box>
            </Slide>
            <Slide index={1}>
              <FactItems
                type="artist"
                title="Your favorite artist"
                artist_data={userTopArtistObj['artist']}
                icon={userTopArtistObj['img_url']}
              ></FactItems>
            </Slide>
            <Slide index={2}>
              <FactItems
                type="rec_songs"
                title="We think you'll like... "
                rec_songs_data={userRecTrackObj['track_title']}
                icon={userRecTrackObj['img_url']}
              ></FactItems>
            </Slide>
          </Slider>
        </Box>

        <Box align="right" mx="3">
          <ButtonBack>
            <Button
              variant="outline"
              borderColor={colorMode === 'dark' ? 'pink.100' : 'brand.800'}
              size="sm"
              fontSize="md"
              leftIcon={<ArrowLeftIcon />}
            >
              <Text>Previous</Text>
            </Button>
          </ButtonBack>

          <ButtonNext>
            <Button
              variant="outline"
              borderColor={colorMode === 'dark' ? 'pink.100' : 'brand.800'}
              size="sm"
              fontSize="md"
              rightIcon={<ArrowRightIcon />}
              ml={2}
            >
              <Text>Next</Text>
            </Button>
          </ButtonNext>
        </Box>

        {/* <DotGroup totalSlides={3}></DotGroup> */}
      </CarouselProvider>
    </Box>
  );
};

export default FactsSliderContainer;
