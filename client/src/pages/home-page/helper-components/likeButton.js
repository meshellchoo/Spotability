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
  HStack,
} from '@chakra-ui/react';
import {
  SunIcon,
  MoonIcon,
  EmailIcon, 
} from '@chakra-ui/icons'

function Like()
{
    return(
        <IconButton
        variant='solid'
        colorScheme='black'
        aria-label='Call Sage'
        fontSize='0px'
        _hover='#fec5bb'
        isRound='false'
        width={300}
        height={300}
        bg='fec5bb'
        
        
        icon={<Image
          src='../../heart.svg'
          width={300}
          height={300}
        >
          
        </Image>}
      />

    )
    
}



export default Like