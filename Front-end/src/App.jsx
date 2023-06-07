import { ChakraProvider } from '@chakra-ui/react'
import customTheme from './chakraTheme'
import { Router, Route, Routes } from 'react-router-dom'
import Home from './components/HomePage'
import Dashboard from './components/Dashboard'
import NewComplaintModal from './components/NewComplaintModal'

function App() {
    return (
        <ChakraProvider theme={customTheme}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </ChakraProvider>
    )
}

export default App
