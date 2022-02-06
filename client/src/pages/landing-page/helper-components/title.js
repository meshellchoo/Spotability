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
              Fames vulputate sollicitudin sociosqu nulla adipiscing ac ultricies habitant faucibus risus, penatibus aliquet iaculis interdum nostra tortor dictum morbi mus. Vivamus venenatis ornare sollicitudin aptent diam amet metus consectetur tellus sed euismod aliquam, pharetra aenean mus praesent hendrerit sociosqu donec semper eu phasellus magna. Nulla placerat iaculis lacinia blandit lacus congue dis lectus, mattis pretium rutrum ornare sem efficitur est, tempor erat ridiculus ad mauris sodales quis. Dictum venenatis purus adipiscing odio fringilla phasellus augue nullam vel mauris magnis enim, ac ligula magna arcu cubilia convallis lorem ut ipsum fusce tempor. Facilisis felis iaculis imperdiet dapibus mauris metus finibus eros bibendum, dui malesuada pretium sapien sociosqu nulla himenaeos urna. 
            </Text>
          </Box>
      </Flex>
    </VStack>
  )
}

export default Title