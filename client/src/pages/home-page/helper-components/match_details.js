import {
  Box,
  Stack,
  VStack,
  Flex,  useColorMode,
  Image,
  IconButton,
  Heading,
  Wrap,
  WrapItem,
  Center,
  Button,
  Text,
  useStyleConfig,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import Container from '../../../container';
import {  useState, useEffect} from 'react';

function MatchDetailsModal() {
  const { isOpen, onOpen, onClose } = useDisclosure( {defaultIsOpen: true})
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Sociosqu ultrices viverra venenatis senectus cubilia semSociosqu ultrices viverra venenatis senectus cubilia sem
            </Text>
            {/* <Lorem count={2} /> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

function ReturnMatchedPerson(original_user) 
{
  const {colorMode, toggleColorMode} = useColorMode();
  const [matchedData, setMatchedData] = useState("");
  const [matchedName, setMatchedname] = useState("");
  const [matchedImage, setMatchedImage] = useState("");
  const [matchedCountry, setMatchedCountry] = useState("");
  const [originalUserEmail, setOriginalUserEmail] = useState("");


  useEffect(() => {
    setOriginalUserEmail(original_user);
    console.log("Hi", originalUserEmail)
  }, [originalUserEmail, setOriginalUserEmail]);

  return (
      <Flex direction="column">
      <Container>
      <VStack>
        <Center>
        <Box
          p="50px"
          rounded="20px"
          overflow="hidden"  
          shadow="lg"
          bg={(colorMode === 'dark' ? '#fcd5ce' : '#fff')}>
            <Flex alignItems="center">
              <VStack>
                <Box mt={5}>
                  <Image 
                    mt={3}
                    // src={userImage ? userImage: "none"}
                    // src={userImage}
                    rounded='full'
                    w={32}
                    h={32}
                    boxShadow='md'>
                  </Image>
                  </Box>
                  <Text fontSize="3xl" fontWeight="medium" color="black">
                    {/* {userName} */}
                  </Text>
                  <Text fontSize="xl" fontWeight="small" color="black">
                    {/* {userCountry} */}
                  </Text>
                  
                  <Box
                  position="relative">
                    <Button
                      mt={5}
                      // spinner={<BeatLoader size={8} color='white' />}
                    >
                      Test
                    </Button>
                    </Box>
                    
                    <Box>
                      <IconButton
                        // spinner={<BeatLoader size={8} color='white' />}
                        my={5}
                        borderRadius="full"
                        aria-label='Cancel'
                        // display={cancelButtonClick ? false: true}
                      >
                    </IconButton>
                  </Box>
              </VStack>
            </Flex>
        </Box>
        </Center>
      </VStack>
      </Container>
      </Flex>
  )
}

export default MatchDetailsModal