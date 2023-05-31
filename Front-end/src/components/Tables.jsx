import React, { useState } from 'react'
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'
import ReplyModal from './ReplyModal'
import WarningModal from './WarningModal'
import complaintsData from './tables.json'

const ComplaintTable = ({ onComplaintClick }) => {
    const [selectedComplaint, setSelectedComplaint] = useState(null)
    const [isReplyModalOpen, setReplyModalOpen] = useState(false)
    const [isWarningModalOpen, setWarningModalOpen] = useState(false)


    const openReplyModal = complaint => {
        setSelectedComplaint(complaint)
        setReplyModalOpen(true)
    }

    const closeReplyModal = () => {
        setSelectedComplaint(null)
        setReplyModalOpen(false)
    }

    const handleResolveClick = () => {
        openWarningModal()
    }

    const openWarningModal = () => {
        setWarningModalOpen(true)
    }

    const closeWarningModal = () => {
        setWarningModalOpen(false)
    }

    const complaints = complaintsData

    return (
        <Box paddingLeft="85px" paddingTop="35px" width="95%">
            <Box maxH="60vh" overflowY="auto">
                <TableContainer overflowX="unset" overflowY="unset">
                    <Table>
                        <Thead
                            alignItems="center"
                            position="sticky"
                            top={0}
                            zIndex="docked"
                        >
                            <Tr>
                                <Th borderLeftRadius="7px" fontSize="14px">
                                    Complaint
                                </Th>
                                <Th fontSize="14px">Created On</Th>
                                <Th fontSize="14px">Resolved On</Th>
                                <Th fontSize="14px">Status</Th>
                                <Th fontSize="14px">Replies</Th>
                                <Th fontSize="14px" borderRightRadius="7px">
                                    Action
                                </Th>
                            </Tr>
                            <Tr h="26px"></Tr>
                        </Thead>
                        <Tbody alignItems="center">
                            {complaints.map((complaint, index) => (
                                <React.Fragment key={index}>
                                    <Tr
                                        height="48px"
                                        bg="white"
                                        borderRadius="7px"
                                    >
                                        <Td
                                            borderLeftRadius="7px"
                                            fontFamily="Roboto-Regular"
                                            textDecoration="underline"
                                        >
                                            <button
                                                onClick={() =>
                                                    onComplaintClick(complaint)
                                                }
                                            >
                                                {complaint.complaint}
                                            </button>
                                        </Td>
                                        <Td fontFamily="Roboto-Regular">
                                            {complaint.createdOn}
                                        </Td>
                                        <Td fontFamily="Roboto-Regular">
                                            {complaint.resolvedOn}
                                        </Td>
                                        <Td fontFamily="Roboto-Regular">
                                            {complaint.status}
                                        </Td>
                                        <Td
                                            fontFamily="Roboto-Regular"
                                            textDecoration="underline"
                                        >
                                            <button
                                                onClick={() =>
                                                    openReplyModal(complaint)
                                                }
                                            >
                                                {complaint.replies}
                                            </button>{' '}
                                        </Td>
                                        <Td
                                            borderRightRadius="7px"
                                            fontFamily="Roboto-Medium"
                                        >
                                            <button
                                                onClick={handleResolveClick}
                                            >
                                                {complaint.action}
                                            </button>
                                        </Td>
                                    </Tr>
                                    {index < complaints.length - 1 && (
                                        <Tr height="20px" />
                                    )}
                                </React.Fragment>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
            {isReplyModalOpen && (
                <ReplyModal
                    onClose={closeReplyModal}
                    complaint={selectedComplaint}
                />
            )}
            {isWarningModalOpen && <WarningModal onClose={closeWarningModal} />}
        </Box>
    )
}

export default ComplaintTable
