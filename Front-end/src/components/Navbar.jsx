import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Box } from '@chakra-ui/react'
import Logo from '../assets/Group.png'

function Navbar({ onRegisterNewClick }) {
    return (
        <>
            <Box
                padding="50px"
                paddingRight="85px"
                h="160px"
                w="100vw"
                display="flex"
                justifyContent="space-between"
            >
                <Link to="/">
                    <img
                        style={{ height: '57.12px', width: '241px' }}
                        src={Logo}
                        alt="logo-img"
                    />
                </Link>
                <Button
                    fontFamily="Roboto-Medium."
                    fontSize="18px"
                    w="265px"
                    h="45px"
                    bg="rgba(150, 133, 242, 1)"
                    borderRadius="7px"
                    color="white"
                    onClick={onRegisterNewClick}
                >
                    Register New Complaint
                </Button>
            </Box>
        </>
    )
}

export default Navbar
