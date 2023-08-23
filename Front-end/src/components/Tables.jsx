import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getinfo, resolveComplaint } from './Redux/actions' // Import the resolveComplaint action
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
import WarningModal from './WarningModal'

const formatDate = date => {
    const formattedDate = new Date(date)
    const day = formattedDate.getDate().toString().padStart(2, '0')
    const month = (formattedDate.getMonth() + 1).toString().padStart(2, '0')
    const year = formattedDate.getFullYear()
    return `${day}-${month}-${year}`
}

const ComplaintTable = ({
    onComplaintClick,
    onResolveClick,
    onReplyClick,
    complaintsData,
}) => {
    console.log('getting data from redux', complaintsData) //Needs to be removed before deploying

    const dispatch = useDispatch()
    const [showWarningModal, setShowWarningModal] = useState(false) // State to show/hide warning modal
    const [selectedComplaint, setSelectedComplaint] = useState(null) // State to store selected complaint

    useEffect(() => {
        dispatch(getinfo())
    }, [])

    const handleResolveClick = complaint => {
        setSelectedComplaint(complaint)
        setShowWarningModal(true)
    }

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
                            {complaintsData.map((complaint, index) => {
                                let dte = new Date(complaint.createdOn)
                                const isResolved =
                                    complaint.status === 'Resolved' // Check if the complaint is resolved

                                return (
                                    <React.Fragment key={index}>
                                        <Tr
                                            height="48px"
                                            bg="white"
                                            borderRadius="7px"
                                            rowGap="20px"
                                        >
                                            <Td
                                                borderLeftRadius="7px"
                                                fontFamily="Roboto-Regular"
                                                textDecoration="underline"
                                            >
                                                <button
                                                    onClick={() =>
                                                        onComplaintClick(
                                                            complaint
                                                        )
                                                    }
                                                >
                                                    {complaint.subject}
                                                </button>
                                            </Td>
                                            <Td fontFamily="Roboto-Regular">
                                                {/* {dte.getDate()}-
                                                {dte.getMonth() + 1}-
                                                {dte.getFullYear()} */}
                                                {formatDate(
                                                    complaint.createdOn
                                                )}
                                            </Td>
                                            <Td fontFamily="Roboto-Regular">
                                                {/* {complaint.resolvedOn} */}
                                                {formatDate(
                                                    complaint.resolvedOn || '-'
                                                )}
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
                                                        onReplyClick(complaint)
                                                    }
                                                >
                                                    view
                                                </button>
                                            </Td>
                                            <Td
                                                borderRightRadius="7px"
                                                fontFamily="Roboto-Medium"
                                            >
                                                {/* Render the "Resolve" button based on the complaint's status */}
                                                {isResolved ? (
                                                    'Resolved' // Display a message instead of the button
                                                ) : (
                                                    <button
                                                        onClick={() =>
                                                            handleResolveClick(
                                                                complaint
                                                            )
                                                        }
                                                    >
                                                        Resolve
                                                    </button>
                                                )}
                                            </Td>
                                        </Tr>
                                        <br />
                                    </React.Fragment>
                                )
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
            {showWarningModal && (
                <WarningModal
                    onClose={() => setShowWarningModal(false)}
                    onConfirm={() => {
                        // Dispatch an action to update the resolved date
                        dispatch(resolveComplaint(selectedComplaint._id))
                        setShowWarningModal(false)
                    }}
                />
            )}
        </Box>
    )
}

export default ComplaintTable
