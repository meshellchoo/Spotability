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
import { useParams } from 'react-router-dom'

function App() {
  const { email } = useParams() // <-check if it's undefined, if it is just hardcode email
  console.log(email)
  // set the email you get from backend to your local storage
  localStorage.setItem('email', email);
  // now you can acccess your localstorage anywhere frontend using this command 
  localStorage.getItem('email'); 
  
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
