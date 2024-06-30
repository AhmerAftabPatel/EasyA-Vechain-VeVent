import { Badge, Container, Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { InfoCard } from "./components";
import MyEventsCard from "./components/MyeventsCard";
import MyEventsCardTwo from "./components/MyEventsCardtwo";
import YourEventsCard from "./components/YourEvents";

// const events = [{
//     name : "The perfect latte",
//     description : "Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.",
//     status : <Badge  color={'red'}>ON GOING</Badge>
// }]


const MyEvents = () => {
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
                ><InfoCard />
                    <Tabs isFitted variant='enclosed'>
                        <TabList mb='1em'>
                            <Tab>Registered Events</Tab>
                            <Tab>My Events</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <YourEventsCard />
                                <MyEventsCardTwo />
                            </TabPanel>
                            <TabPanel> 
                                <MyEventsCard />
                                <MyEventsCardTwo />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>


                </Container>
            </Flex>
        </>
    )
}

export default MyEvents;