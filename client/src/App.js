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
import { useParams } from 'react-router-dom'

function App() {
  const [auth, setAuth] = useState(null);
  const userEmail = "candywithonon@ymail.com";
  const { email } = useParams() // <-check if it's undefined, if it is just hardcode email
  console.log(email)
  // set the email you get from backend to your local storage
  localStorage.setItem('email', email);
  // now you can acccess your localstorage anywhere frontend using this command 
  localStorage.getItem('email'); 
  console.log("email" + localStorage.getItem('email'))
  // useEffect(() => {
  //   axios.get("http://127.0.0.1:8000/spotability/search-by-email?email="+localStorage.getItem('email')).then(({ data }) => {
  //     setAuth(data);
  //     console.log(auth, data, "auth")
  //   });
  // }, []);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/spotability/search-by-email?email=xinwng3@gmail.com").then(({ data }) => {
      setAuth(data);
      setEmail(data["email"]);
      
    });
  }, []);
  return (
    <Container>
      <Box>
        <VStack>
          <HomePage email={email}/>
        </VStack>
      </Box>
    </Container>
  );
}

export default App;
