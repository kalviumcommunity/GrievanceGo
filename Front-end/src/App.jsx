import { Flex, Text, Heading, ChakraProvider } from '@chakra-ui/react'
import customTheme from './chakraTheme'
import Navbar from './components/navbar_homepage'
import Bg from './components/HomePage'

function App() {
    return (
        <ChakraProvider theme={customTheme}>
            <Bg />
        </ChakraProvider>
    )
}

export default App
