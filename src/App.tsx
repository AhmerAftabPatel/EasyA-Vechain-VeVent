import { DAppKitProvider } from "@vechain/dapp-kit-react";
import { ChakraProvider, Container, Flex } from "@chakra-ui/react";
import {
  Dropzone,
  Footer,
  InfoCard,
  Instructions,
  Navbar,
  SubmissionModal,
} from "./components";
import { lightTheme } from "./theme";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Events } from "./components/Events";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import MyEvents from "./Myevents";
import Participants from "./Participants";

// RECaptcha V3 site key (https://developers.google.com/recaptcha/docs/v3)
const VITE_RECAPTCHA_V3_SITE_KEY = import.meta.env
  .VITE_RECAPTCHA_V3_SITE_KEY as string;

function App() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={VITE_RECAPTCHA_V3_SITE_KEY}>
      <ChakraProvider theme={lightTheme}>
        <DAppKitProvider
          usePersistence
          requireCertificate={false}
          genesis="test"
          nodeUrl="https://testnet.vechain.org/"
          logLevel={"DEBUG"}
        >
          <Navbar />
          <Router>
            <Routes>
              <Route path={'/'} element={<Home />} />
              <Route path={'/my-events'} element={<MyEvents />} />
              <Route path={'/my-participants'} element={<Participants />} />
            </Routes>
          </Router>
          <Footer/>
        </DAppKitProvider>
      </ChakraProvider>
    </GoogleReCaptchaProvider>
  );
}

export default App;
