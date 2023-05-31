import Logo from '../assets/Group.png'
import { Button, Box } from '@chakra-ui/react'
import { useAuth0 } from '@auth0/auth0-react'

function NavbarHomepage() {
    const { loginWithRedirect } = useAuth0()
    return (
        <Box
            paddingTop="3.83%"
            paddingRight="4%"
            paddingLeft="4%"
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
                onClick={() => loginWithRedirect()}
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

export default NavbarHomepage
