import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getinfo } from './Redux/actions'
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
// import complaintsData from './complaint_info.json'

const ComplaintTable = ({
    onComplaintClick,
    onResolveClick,
    onReplyClick,
    complaintsData,
}) => {
    console.log('getting data from redux', complaintsData)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getinfo())
    }, [])

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
                                                {dte.getDate()}-
                                                {dte.getMonth() + 1}-
                                                {dte.getFullYear()}
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
                                                        onReplyClick(complaint)
                                                    }
                                                >
                                                    view
                                                    {/* {complaint.Replies} */}
                                                </button>
                                            </Td>
                                            <Td
                                                borderRightRadius="7px"
                                                fontFamily="Roboto-Medium"
                                            >
                                                <button
                                                    onClick={onResolveClick}
                                                >
                                                    {/* {complaint.Action} */}
                                                    resolve
                                                </button>
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
        </Box>
        // <div>helloo</div>
    )
}

export default ComplaintTable
