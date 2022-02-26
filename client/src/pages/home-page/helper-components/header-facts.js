import { Box, Stack, useMediaQuery, Heading } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import React from 'react';
import FactsSliderContainer from './facts-slider-container';

function FactsComponent({ userObject }) {
  const [desktopQuery] = useMediaQuery('(min-width: 700px)');
  const [isMinWidth, setIsMinWidth] = useState(false);

  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  return (
    <Stack>
      <Box mb={2}>
        <Heading fontSize="2xl">Learn more about yourself</Heading>
      </Box>
      <Box>
        <FactsSliderContainer userObject={userObject}></FactsSliderContainer>
      </Box>
    </Stack>
  );
}

export default FactsComponent;
