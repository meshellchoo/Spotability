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
  Flex,
  useColorMode,
} from '@chakra-ui/react';
import Container from './container';
import HomePage from './pages/home-page/home-page';

function App() {
  return (
    <Container>
      <Box>
        <Flex>
        <VStack>
          <HomePage/>
        </VStack>
        </Flex>
      </Box>
    </Container>
  );
}

export default App;
