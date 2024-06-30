import {
  Box,
  Card,
  HStack,
  Image,
  VStack,
  Text,
  Button,
  Flex,
  Link,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  SimpleGrid,
  Grid,
  GridItem,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useWallet } from "@vechain/dapp-kit-react";
import { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

export const InfoCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { account } = useWallet();
  const [balance, setBalance] = useState(0)
  function BasicUsage() {

    return (
      <>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Lorem count={2} /> */}
              <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Input placeholder='Title' />
                <FormLabel>Description</FormLabel>
                <Textarea placeholder='Description' />
                <FormLabel>Allocated Tokens</FormLabel>
                <Input placeholder='B3TR' />
                
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Create</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  return (
    <Card w={"full"} p={'10px'}>
      <BasicUsage />
      <Grid templateColumns='repeat(5, 1fr)' gap={2} justifyContent={'center'} display={"flex"} alignItems={'center'}>
        <GridItem w='100%' h='100%'>
          <Card py='10px' boxShadow={'xs'} px={5} h="100px" align={'center'} justifyContent={'center'} display={"flex"} alignItems={'center'}>
            <Text fontWeight={'bold'} fontSize={50} >30</Text>
            B3TR Earned
          </Card>
        </GridItem>
        <GridItem w='100%' h='100px'>
          <Card boxShadow={'xs'} px={5} h="100px" align={'center'} justifyContent={'center'} display={"flex"} alignItems={'center'}>
            <Text fontWeight={'bold'} fontSize={50} >2</Text>
            Registered Events
          </Card>
        </GridItem>
        <GridItem w='100%' h='100px'>
          <Card boxShadow={'xs'} px={5} h="100px" align={'center'} justifyContent={'center'} display={"flex"} alignItems={'center'}>

          </Card>
        </GridItem>
      </Grid>
      {/* <br/> */}
      <Box p={3}>
        <VStack w={"full"} spacing={{ base: 2, md: 4 }}>
          <Card>

          </Card>
          {/* <Image src="/ecology-bag-with-leaves.png" borderRadius={16} /> */}
          <Flex
            w={"full"}
            justifyContent={"space-between"}
            direction={{ base: "column", md: "row" }}
            alignItems={"center"}
          >
            <HStack alignSelf={{ base: "center", md: "flex-start" }}>
              <Image src="/logo.png" h={16} borderRadius={16} />
              <Text fontSize={24} fontWeight={800}>
                EcoEarn
              </Text>
            </HStack>
            <Flex
              mt={{ base: 4, md: 0 }}
              direction={{ base: "column", md: "row" }}
            >
              {/* <Link isExternal href="https://github.com/vechain/x-app-template"> */}
              <Button
                onClick={onOpen}
                rounded={"full"}
                colorScheme="primary"
                size={"md"}
                leftIcon={<MdOutlineArrowOutward />}
                mt={{ base: 2, md: 0 }}
                ml={{ base: 0, md: 2 }}
              >
                Create an Event
              </Button>
              {/* </Link> */}
            </Flex>
          </Flex>
        </VStack>
      </Box>
    </Card>
  );
};
