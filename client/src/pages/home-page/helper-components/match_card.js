import {
  Box,
  Stack,
  VStack,
  Flex,
  useColorMode,
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
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CloseIcon, SmallCloseIcon } from '@chakra-ui/icons';
import Container from '../../../container';
import ReturnMatchedPerson from './match_details';
import { CardSwiper } from 'react-card-rotate-swiper';

export default function MatchCard({ matchedObject }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [foundMatch, setFoundMatch] = useState(false);
  return (
    <Center>
      <Box
        p="35px"
        width="300px"
        height="500px"
        rounded="20px"
        shadow="lg"
        bg={colorMode === 'dark' ? 'pink.900' : '#fff'}
        display={foundMatch === false ? false : true}
      >
        <VStack>
          <Heading mb={3} fontSize="4xl" color="black">
            Your Matches
          </Heading>
          <Img src={matchedObject['img_url']} borderRadius="full"></Img>

          <Text fontSize="3xl" fontWeight="medium" color="black">
            {matchedObject['display_name']}
          </Text>
          <Text fontSize="lg" fontWeight="small" color="black">
            {matchedObject['country']}
          </Text>
        </VStack>
      </Box>
    </Center>
  );
}
