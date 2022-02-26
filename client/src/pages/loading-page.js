import Container from '../container';
import {
  VStack,
  Spinner,
  Box,
  Center,
  useColorMode,
  Heading,
} from '@chakra-ui/react';

export default function LoadingPage() {
  return (
    <Container>
      <Center>
        <Box verticalAlign={'center'} mt={100}>
          <VStack>
            <Spinner size={'xl'}>
              <Heading>Loading...</Heading>
            </Spinner>
          </VStack>
        </Box>
      </Center>
    </Container>
  );
}
