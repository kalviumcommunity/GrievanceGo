import { Flex, Text, Heading, ChakraProvider } from '@chakra-ui/react'
import customTheme from './chakraTheme'

function App() {
    return (
        <ChakraProvider theme={customTheme}>
            <Flex bg="white.400" h="100vh">
                <Heading as="h1" size="4xl">
                    Grievance Go
                </Heading>
                <Text>A platform where your complaints shall be solved</Text>
            </Flex>
        </ChakraProvider>
    )
}

export default App
