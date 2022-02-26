import React, { useState } from 'react';
import {
  Box,
  VStack,
  Flex,
  useColorMode,
  Image,
  IconButton,
  Heading,
  Stack,
  Wrap,
  WrapItem,
  Center,
  Button,
  Text,
  HStack,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon, EmailIcon } from '@chakra-ui/icons';

// Components
import Container from '../../container';
import MatchModal from './helper-components/match_modal';

import axios from 'axios';

import HomePageTitle from './helper-components/header';
import FactsBox from './helper-components/header-facts';
import ReturnMatchedPerson from './helper-components/match_details';

import { useEffect } from 'react';

function HomePage({ userObject }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container>
      <Box>
        <Stack mb="50">
          <Center>
            <Box my={10} p={2}>
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
          </Center>

          <Box>
            <HomePageTitle userObject={userObject} />
          </Box>

          <Box mt={20}>
            <FactsBox userObject={userObject} />
          </Box>

          <Center>
            <Box my={20}>
              <MatchModal userObject={userObject} />
              {/* <ReturnMatchedPerson/> */}
            </Box>
          </Center>
        </Stack>
      </Box>
    </Container>
  );
}

export default HomePage;
