import {
    Container, Flex, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from "@chakra-ui/react";
import { InfoCard } from "./components";
import { Card } from "@chakra-ui/react";



const Participants = () => {
    return (
        <>
            <Flex flex={1}>
                <Container
                    mt={{ base: 4, md: 10 }}
                    maxW={"container.xl"}
                    mb={{ base: 4, md: 10 }}
                    display={"flex"}
                    flex={1}
                    alignItems={"center"}
                    justifyContent={"flex-start"}
                    flexDirection={"column"}
                >
                    <InfoCard />
                    <Card>
                    <TableContainer>
                        <Table size='sm'>
                            <Thead>
                                <Tr>
                                    <Th>To convert</Th>
                                    <Th>into</Th>
                                    <Th isNumeric>multiply by</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>inches</Td>
                                    <Td>millimetres (mm)</Td>
                                    <Td isNumeric>25.4</Td>
                                </Tr>
                                <Tr>
                                    <Td>feet</Td>
                                    <Td>centimetres (cm)</Td>
                                    <Td isNumeric>30.48</Td>
                                </Tr>
                                <Tr>
                                    <Td>yards</Td>
                                    <Td>metres (m)</Td>
                                    <Td isNumeric>0.91444</Td>
                                </Tr>
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th>To convert</Th>
                                    <Th>into</Th>
                                    <Th isNumeric>multiply by</Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer>
                    </Card>
                </Container>
            </Flex>
        </>
    )
}

export default Participants;