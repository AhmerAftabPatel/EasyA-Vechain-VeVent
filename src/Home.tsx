import { ChakraProvider, Container, Flex } from "@chakra-ui/react"
import { DAppKitProvider } from "@vechain/dapp-kit-react"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import { Footer, InfoCard, Navbar, SubmissionModal } from "./components"
import { Events } from "./components/Events"
import { lightTheme } from "./theme"
const VITE_RECAPTCHA_V3_SITE_KEY = import.meta.env
  .VITE_RECAPTCHA_V3_SITE_KEY as string;
const Home = () => {
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
                            <Events />
                            {/* <Instructions /> */}
                            {/* <Dropzone /> */}
                        </Container>
                    </Flex>

                    {/* MODALS  */}
                    <SubmissionModal />
                </>
    )
}

export default Home;