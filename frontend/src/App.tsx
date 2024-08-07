import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import About from "./pages/About";
import ContactUs from "./pages/Contact";
import Home from "./pages/Home";
import Search from "./pages/Search";
import TopicSearch from "./pages/TopicSearch";
import Acknowledgment from "./pages/Acknowledgment";

function App() {
  return (
    <Router>
      <ChakraProvider>
        <Box display={{ base: "none", lg: "block" }}>
          <Navbar />
        </Box>
        <Box display={{ lg: "none" }}>
          <NavbarMobile />
        </Box>
        <Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<Search />} />
            <Route path="/topic-search" element={<TopicSearch />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/acknowledgement" element={<Acknowledgment />} />
          </Routes>
        </Box>
        <Footer />
      </ChakraProvider>
    </Router>
  );
}

export default App;
