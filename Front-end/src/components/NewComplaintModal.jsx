import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    Grid,
    GridItem,
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react'

function NewComplaintModal({ onClose }) {
    return (
        <Modal isOpen={true} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent
                bgColor="rgba(169,159, 222, 1)"
                maxW="706px"
                maxH="678px"
                w="100%"
                h="100%"
            >
                <ModalHeader
                    fontFamily="Roboto-Medium"
                    paddingTop="38px"
                    fontSize="20px"
                >
                    Please fill out the required fields with your information
                    and describe your complaint in the space provided below.
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Grid gap={4} alignItems="center" paddingLeft="20px">
                        <GridItem colSpan={1}>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input
                                    height="32px"
                                    width="288px"
                                    type="text"
                                    bg="white"
                                    placeholder="Name"
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormControl>
                                <FormLabel>Ward No</FormLabel>
                                <Input
                                    height="32px"
                                    width="288px"
                                    type="text"
                                    bg="white"
                                    placeholder="Ward No"
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormControl>
                                <FormLabel>Phone No</FormLabel>
                                <Input
                                    height="32px"
                                    width="288px"
                                    type="text"
                                    bg="white"
                                    placeholder="Phone No"
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormControl>
                                <FormLabel>AreaLimit</FormLabel>
                                <Input
                                    height="32px"
                                    width="288px"
                                    type="text"
                                    bg="white"
                                    placeholder="AreaLimit"
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormControl>
                                <FormLabel>Subject</FormLabel>
                                <Input
                                    height="32px"
                                    width="288px"
                                    type="text"
                                    bg="white"
                                    placeholder="Subject"
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <FormControl>
                                <FormLabel>Department</FormLabel>
                                <Input
                                    height="32px"
                                    width="288px"
                                    type="text"
                                    bg="white"
                                    placeholder="Department(optional)"
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <FormControl>
                                <FormLabel>Address</FormLabel>
                                <Input
                                    height="32px"
                                    width="621px"
                                    type="text"
                                    bg="white"
                                    placeholder="Address (optional)"
                                />
                            </FormControl>
                        </GridItem>
                        <GridItem colSpan={2}>
                            <FormControl>
                                <FormLabel>Describe your Complaint</FormLabel>
                                <Input
                                    height="120px"
                                    width="621px"
                                    type="text"
                                    bg="white"
                                    placeholder="Describe your Complaint"
                                />
                            </FormControl>
                        </GridItem>
                    </Grid>
                </ModalBody>

                <ModalFooter>
                    <Button
                        bgColor="rgba(30, 30, 30, 1)"
                        color="white"
                        mr={3}
                        onClick={onClose}
                    >
                        Submit
                    </Button>
                    <Button variant="ghost" color="black">
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default NewComplaintModal
