import React from 'react';
import { Box } from '@chakra-ui/react';

export const Container = props => (
  <Box
    w="100%"
    mx="auto"
    maxW="3xl"
    px={{ base: '5', md: '7' }}
    overflow={'auto'}
    {...props}
  />
);

export default Container;
