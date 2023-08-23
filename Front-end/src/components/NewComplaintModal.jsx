import React, { useState } from 'react'
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
import { Registration } from './Redux/actions'
import { useDispatch } from 'react-redux'

function NewComplaintModal({ onClose }) {
    let [name, setName] = useState('')
    let [wardno, setWardNo] = useState('')
    let [phoneno, setPhoneNo] = useState('')
    let [arealimit, setAreaLimit] = useState('')
    let [subject, setSubject] = useState('')
    let [department, setDepartment] = useState('')
    let [address, setAddress] = useState('')
    let [description, setDescription] = useState('')

    const handleName = e => {
        setName(e.target.value)
    }
    const handlewardno = e => {
        setWardNo(e.target.value)
    }
    const handlePhoneno = e => {
        setPhoneNo(e.target.value)
    }
    const handleAreaLimit = e => {
        setAreaLimit(e.target.value)
    }
    const handleSubject = e => {
        setSubject(e.target.value)
    }
    const handleDepartment = e => {
        setDepartment(e.target.value)
    }
    const handleDescription = e => {
        setDescription(e.target.value)
    }
    const handleAddress = e => {
        // console.log(e.target.value)//Needs to be removed before deploying
        setAddress(e.target.value)
    }
    console.log(address) //Needs to be removed before deploying

    const dispatch = useDispatch()
    const handleSubmit = () => {
        dispatch(
            Registration({
                name,
                wardno,
                phoneno,
                arealimit,
                subject,
                department,
                address,
                description,
            })
        )
        onClose()
    }

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
                                    onChange={handleName}
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
                                    onChange={handlewardno}
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
                                    onChange={handlePhoneno}
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
                                    onChange={handleAreaLimit}
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
                                    onChange={handleSubject}
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
                                    onChange={handleDepartment}
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
                                    onChange={handleAddress}
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
                                    onChange={handleDescription}
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
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                    <Button variant="ghost" color="black" onClick={onClose}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default NewComplaintModal
