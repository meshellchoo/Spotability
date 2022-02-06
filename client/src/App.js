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
import LandingPage from './pages/landing-page/landing-page';
import HomePage from './pages/home-page/home-page';
import LoginButton from './pages/landing-page/helper-components/button';


const routes = [
  { path: "/", name: "LandingPage", Component: LandingPage },
  { path: "/HomePage", name:"HomePage", Component: HomePage },
];

const handleClick = () =>{
  HomePage()
}



function App() {
  return (
    <Container>
      <Box>
        <Flex>
        <VStack>
          <LandingPage/>
          {/* <HomePage/> */}
        </VStack>
        </Flex>
      </Box>
    </Container>
  );
}

export default App;
