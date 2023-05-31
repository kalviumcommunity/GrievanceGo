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
import comp_info from './complaint_info.json'
import { chats } from './chats.json'

const ReplyModal = ({ onClose }) => {
    const [showInput, setShowInput] = useState(false)

    const handleReplyClick = () => {
        setShowInput(true)
    }

    return (
        <>
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
                        {comp_info.map((complaint, index) => (
                            <React.Fragment key={index}>
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
                                    <Text display="inline">Subject : </Text>
                                    {complaint.Subject}
                                    <Text
                                        paddingTop="4px"
                                        fontFamily="Roboto-Regular"
                                    >
                                        {complaint.Details}{' '}
                                    </Text>
                                </Box>
                            </React.Fragment>
                        ))}
                        <Box
                            marginTop="15px"
                            overflowY="auto"
                            overflowX="hidden"
                            maxH="231px"
                        >
                            {chats?.map((chat, index) => (
                                <React.Fragment key={index}>
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
                                        <Text fontSize="14px" color="black">
                                            {chat.sender}
                                        </Text>
                                        <Text
                                            fontFamily="Roboto-Medium"
                                            w="80%"
                                            fontSize="15px"
                                        >
                                            use state hook
                                            {chat.message}
                                        </Text>
                                        <Text
                                            color="rgba(130, 130, 130, 1)"
                                            fontFamily="Roboto-Italic"
                                            textAlign="right"
                                            fontSize="12px"
                                        >
                                            {chat.timestamp}
                                        </Text>
                                    </Box>
                                </React.Fragment>
                            ))}
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
        </>
    )
}

export default ReplyModal
