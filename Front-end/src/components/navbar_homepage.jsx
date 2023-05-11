import Logo from '../assets/Group.png'
import { Button, Box, Flex } from '@chakra-ui/react'
import './fonts.css'

function Navbar() {
    return (
        <Box
            padding="50px"
            paddingRight="52px"
            h="160px"
            w="100vw"
            display="flex"
            justifyContent="space-between"
        >
            <img
                style={{ height: '57.12px', width: '241px' }}
                src={Logo}
                alt="logo-img"
            />
            <Button
                fontFamily="Roboto-Black"
                fontSize="20px"
                w="138px"
                h="58px"
                bg="rgba(112, 126, 255, 1)"
                borderRadius="7px"
                color="white"
            >
                Sign In
            </Button>
        </Box>
    )
}

export default Navbar
