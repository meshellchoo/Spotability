import { Tag, TagLabel, VStack, HStack, Stack, Heading, Flex, Box, Text, Image, useMediaQuery, IconButton, Button, Spacer, colorMode, useColorMode, Center, useColorModeValue  } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import React from 'react'


function Title()
{
  return (
    <VStack>
      <Flex direction="column">
        <Box>
            <Heading fontSize="6xl" fontWeight="700" fontStyle="bold">
              Spotability
            </Heading>
        </Box>
        
        <Box mt={3} lineHeight="1.5" textAlign="justify">
          <Text>
            Spotability aims to match two users together based on similar music taste. We track the user's top artists, top songs, and genre. On top of that, the app serves to pair you with other users that also share a similar taste in music. With all that information stored in our MongoDB database, the goal is to bring those who enjoy similar types of music together. The app also has a query for disliked people, and will not show users any matches they previously disliked.
            </Text>
          </Box>
      </Flex>
    </VStack>
  )
}

export default Title