import { Box, Button, Card, CardBody, CardFooter, Flex, Heading, Image, Input, List, ListIcon, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import { Link } from "react-router-dom";


const events = [
    {
        icon: "/steps/1.svg",
        title: "Purchase eco-friendly products",
        description: "Buy products that are eco-friendly and sustainable.",
    },
    {
        icon: "/steps/2.svg",
        title: "Upload the receipt",
        description: "Upload your receipt and AI will verify the products.",
    },
    {
        icon: "/steps/3.svg",
        title: "Earn rewards",
        description: "Earn B3TR for purchasing eco-friendly products.",
    },
];

export const Events = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    function BasicUsage() {
        const [counter, setCounter] = useState(0)
        return (
            <>
                {/* <Button onClick={onOpen}>Open Modal</Button> */}

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Event Name</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Image src="./Vechainimage.png" width={"100%"} height={"270px"} />
                            {/* <Lorem count={2} /> */}
                            <br/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <br />
                            <List spacing={3}>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                    Thursday, 7:00 PM
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                    Earn upto 5 B3TR Token
                                </ListItem>
                            </List>
                        </ModalBody>
                        <Box textAlign={'center'} display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'2'}>
                            <Button onClick={() => setCounter(counter - 1)}>-</Button> <Box width={'50px'}><Input type="number" onChange={(e: any) => setCounter(e.target.value)} value={counter} placeholder='Basic usage' /></Box> <Button onClick={() => setCounter(counter + 1)}>+</Button>
                        </Box>
                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Link to={'/my-events'}><Button variant='ghost'>Register Now</Button></Link>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        )
    }
    return (
        <Card mt={3} w={"full"}>
            <BasicUsage />
            <Flex
                p={{ base: 4 }}
                w="100%"
                direction={{ base: "column", md: "row" }}
            >
                <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
                    {events.map((event) => {
                        return (
                            <Card
                                direction={{ base: 'column', sm: 'row' }}
                                overflow='hidden'
                                variant='outline'
                            >
                                <Image
                                    objectFit='cover'
                                    maxW={{ base: '100%', sm: '200px' }}
                                    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                                    alt='Caffe Latte'
                                />

                                <Stack>
                                    <CardBody>
                                        <Heading size='md'>The perfect latte</Heading>

                                        <Text py='2'>
                                            Caffè latte is a coffee beverage of Italian origin made with espresso
                                            and steamed milk.
                                        </Text>
                                        <List spacing={3}>
                                            <ListItem>
                                                <ListIcon as={MdCheckCircle} color='green.500' />
                                                Thursday, 7:00 PM
                                            </ListItem>
                                            <ListItem>
                                                <ListIcon as={MdCheckCircle} color='green.500' />
                                                Earn upto 5 B3TR Token
                                            </ListItem>
                                        </List>
                                    </CardBody>

                                    <CardFooter gap={2}>
                                        <Button variant='solid' onClick={onOpen} colorScheme='blue'>
                                            Register
                                        </Button>
                                        <Button variant='solid' colorScheme='blue'>
                                            Share
                                        </Button>

                                    </CardFooter>
                                </Stack>
                            </Card>
                        )
                    })}
                </SimpleGrid>
            </Flex>
        </Card>
    );
};
