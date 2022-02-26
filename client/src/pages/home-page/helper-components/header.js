import React, { useState } from 'react';
import {
  Box,
  VStack,
  Flex,
  useColorMode,
  Image,
  IconButton,
  Heading,
  Wrap,
  WrapItem,
  Center,
  Button,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

import { useEffect } from 'react';

import axios from 'axios';

function WelcomeMsg({ userName }) {
  var today = new Date();
  var cur_hr = today.getHours();

  if (cur_hr < 12) {
    return <Heading as="span">{'Good morning, '}</Heading>;
  } else if (cur_hr < 18) {
    return <Heading as="span">{'Good afternoon, '}</Heading>;
  } else {
    return <Heading as="span">{'Good evening, '}</Heading>;
  }
}
function HomePageTitle({ userObject }) {
  // console.log("em" , email.email.email)
  const [desktopQuery] = useMediaQuery('(min-width: 700px)');
  const [isMinWidth, setIsMinWidth] = useState(false);

  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  const [userName, setUserName] = useState('');
  const [authEmail, setAuthEmail] = useState('');
  const [welcomeMsg, setWelcomeMsg] = useState('');
  console.log('%j', userObject);

  React.useEffect(() => {
    axios
      .get(
        'http://127.0.0.1:8000/spotability/search-by-email?email=' +
          localStorage.getItem('email')
      )
      .then(response => {
        setUserName(response.data['display_name']);
      });
  }, []);

  React.useEffect(() => {
    setWelcomeMsg(WelcomeMsg(userName));
    console.log(welcomeMsg);
  }, []);

  return (
    <Flex direction="column">
      <Box mb={10}>
        <Heading
          fontSize={isMinWidth ? '4xl' : '3xl'}
          textAlign="left"
          fontWeight="bold"
        >
          {welcomeMsg} {userObject['data']['display_name']}!
        </Heading>
      </Box>
    </Flex>
  );
}

export default HomePageTitle;
