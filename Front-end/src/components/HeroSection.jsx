import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const HeroSection = () => {
    return (
        <Box>
            <Box
                width="900px"
                fontFamily="Poppins-ExtraBold"
                fontSize="34px"
                fontWeight="ExtraBold"
                color="rgba(59, 100, 182, 1)"
                paddingLeft="4%"
                paddingTop="3%"
            >
                Transform your community by connecting citizens and authorities
                on one platform
            </Box>
            <Box
                style={{
                    width: '600px',
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: '16px',
                    paddingTop: '2.33%',
                    paddingLeft: '4%',
                }}
            >
                Our platform is designed to transform communities by bringing
                citizens and authorities together in one place. By providing a
                space for open communication and collaboration, we aim to bridge
                the gap between the people and those in power.
            </Box>
            <Box paddingLeft="4%" paddingTop="80px">
                <Link to="/dashboard">
                    <Button
                        fontFamily="Poppins-Bold"
                        bg="rgba(112, 126, 255, 1)"
                        color="White"
                        w="247px"
                        h="65px"
                        fontSize="22px"
                        borderRadius="7px"
                    >
                        Get Started Now
                    </Button>
                </Link>
            </Box>
        </Box>
    )
}

export default HeroSection
