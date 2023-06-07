import React, { useState } from 'react'
import {
    Box,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    Input,
} from '@chakra-ui/react'

const ReplyModal = ({ onClose, complaint }) => {
    const { Subject, Details } = complaint
    const [showInput, setShowInput] = useState(false)
    const handleReplyClick = () => {
        setShowInput(true)
    }

    return (
        <Modal isOpen={true} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent
                bgColor="rgba(169, 160, 222, 1)"
                maxHeight="523px"
                maxWidth="596px"
                height="100%"
                width="100%"
            >
                <ModalCloseButton />
                <ModalBody>
                    <Box
                        color="white"
                        bgColor="rgba(101, 83, 193, 1)"
                        marginTop="37px"
                        marginLeft="3px"
                        paddingTop="10px"
                        paddingLeft="16px"
                        h="142px"
                        w="542px"
                        fontFamily="Roboto-Bold"
                    >
                        <Box>
                            <Text display="inline">
                                {/* {console.log(Subject)} */}
                                {Subject}
                            </Text>

                            <Text paddingTop="4px" fontFamily="Roboto-Regular">
                                {Details}
                            </Text>
                        </Box>
                    </Box>
                    <Box
                        marginTop="15px"
                        overflowY="auto"
                        overflowX="hidden"
                        maxH="231px"
                    >
                        <Box
                            bgColor="white"
                            marginTop="8px"
                            marginLeft="3px"
                            paddingTop="10px"
                            paddingLeft="13px"
                            paddingRight="15px"
                            paddingBottom="10px"
                            w="542px"
                            fontFamily="Roboto-Bold"
                        >
                            {complaint.chats?.map((comp, index) => {
                                return (
                                    <Box key={index}>
                                        <Text fontSize="14px" color="black">
                                            {comp.sender}
                                        </Text>
                                        <Text
                                            fontFamily="Roboto-Medium"
                                            w="80%"
                                            fontSize="15px"
                                        >
                                            {' '}
                                            {comp.message}{' '}
                                        </Text>
                                        <Text
                                            color="rgba(130, 130, 130, 1)"
                                            fontFamily="Roboto-Italic"
                                            textAlign="right"
                                            fontSize="12px"
                                        >
                                            {comp.timestamp}
                                        </Text>
                                    </Box>
                                )
                            })}
                        </Box>
                    </Box>
                </ModalBody>

                <ModalFooter>
                    {showInput ? (
                        <>
                            <Input
                                w="472px"
                                h="39px"
                                placeholder="Enter your message"
                                bgColor="white"
                                marginRight="10px"
                            />
                            <Button
                                colorScheme="black"
                                bgColor="black"
                                color="white"
                            >
                                Send
                            </Button>
                        </>
                    ) : (
                        <Button
                            colorScheme="black"
                            bgColor="black"
                            color="white"
                            onClick={handleReplyClick}
                        >
                            Reply
                        </Button>
                    )}
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ReplyModal
