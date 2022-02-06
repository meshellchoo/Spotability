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
import {useState, useEffect} from 'react'
import axios from 'axios'
import Container from './container';
import HomePage from './pages/home-page/home-page';

function App() {
  const [auth, setAuth] = useState(null);
  const userEmail = "candywithonon@ymail.com";

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/spotability/search-by-email?email=candywithonon@ymail.com").then(({ data }) => {
      setAuth(data);
      console.log(auth, data, "auth")
    });
  }, []);

  return (
    <Container>
      <Box>
        <VStack>
          <HomePage auth={auth}/>
        </VStack>
      </Box>
    </Container>
  );
}

export default App;
