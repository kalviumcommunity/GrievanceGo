import React from 'react'
import {
    Box,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Divider,
} from '@chakra-ui/react'

const ComplaintViewModal = ({ onClose, complaint }) => {
    return (
        <Modal isOpen={true} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent
                bgColor="rgba(196, 189, 235, 1)"
                maxW="555px"
                maxH="493px"
                w="100%"
                h="100%"
            >
                <ModalHeader fontFamily="Roboto-Bold">
                    {complaint.Subject}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody fontFamily="Roboto">
                    {complaint.Details}
                    <Divider my={6} />
                    <Box display="flex" flexDirection="column">
                        <Box display="flex" my={2.2}>
                            <Text fontFamily="Roboto-Bold" width={120}>
                                Name:
                            </Text>
                            {complaint.Name}
                        </Box>
                        <Box display="flex" my={2.2}>
                            <Text fontFamily="Roboto-Bold" width={120}>
                                Phone No:
                            </Text>
                            {complaint['Phone No']}
                        </Box>
                        <Box display="flex" my={2.2}>
                            <Text fontFamily="Roboto-Bold" width={120}>
                                AreaLimit:
                            </Text>
                            {complaint['AreaLimit']}
                        </Box>
                        <Box display="flex" my={2.2}>
                            <Text fontFamily="Roboto-Bold" width={120}>
                                Ward No:
                            </Text>
                            {complaint.WardNo}
                        </Box>
                        <Box display="flex" my={2.2}>
                            <Text fontFamily="Roboto-Bold" width={120}>
                                Department:
                            </Text>
                            {complaint.Department}
                        </Box>
                        <Box fontFamily="Roboto" display="flex" my={2.2}>
                            <Text fontFamily="Roboto-Bold" width={120}>
                                Address:
                            </Text>
                            {complaint.Address}
                        </Box>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ComplaintViewModal
