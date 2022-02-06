import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  IconButton,
  Button,
  useColorMode,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Container from './container';
import LandingPage from './pages/landing-page/landing-page';

function App() {
  
  
  return (
    <Container>
      <Box fontSize="xl">
        <VStack spacing={8}>
          <LandingPage/>
        </VStack>
      </Box>
    </Container>
  );
}

export default App;
