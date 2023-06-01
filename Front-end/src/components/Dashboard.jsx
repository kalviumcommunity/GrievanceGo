import React from 'react'
import { Box, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import bg2 from '../assets/bg2.png'
import Navbar from './Navbar'
import ComplaintTable from './tables'
import NewComplaintModal from './NewComplaintModal'
import ComplaintViewModal from './ComplaintViewModal'
import WarningModal from './WarningModal'

const Dashboard = () => {
    const {
        isOpen: isNewComplaintModalOpen,
        onOpen: openNewComplaintModal,
        onClose: closeNewComplaintModal,
    } = useDisclosure()

    const {
        isOpen: isComplaintViewModalOpen,
        onOpen: openComplaintViewModal,
        onClose: closeComplaintViewModal,
    } = useDisclosure()

    const {
        isOpen: isWarningModalOpen,
        onOpen: openWarningModal,
        onClose: closeWarningModal,
    } = useDisclosure()

    const [selectedComplaint, setSelectedComplaint] = useState(null)

    const handleComplaintClick = complaint => {
        setSelectedComplaint(complaint)
        openComplaintViewModal()
    }

    // const handleResolveClick = () => {
    //     ()
    // }

    return (
        <Box
            bgImage={`url(${bg2})`}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            minHeight="100vh"
        >
            <Navbar onRegisterNewClick={openNewComplaintModal} />
            <ComplaintTable
                onComplaintClick={handleComplaintClick}
                onResolveClick={openWarningModal}
            />

            {isNewComplaintModalOpen && (
                <NewComplaintModal onClose={closeNewComplaintModal} />
            )}

            {isComplaintViewModalOpen && (
                <ComplaintViewModal
                    onClose={closeComplaintViewModal}
                    complaint={selectedComplaint}
                />
            )}

            {isWarningModalOpen && <WarningModal onClose={closeWarningModal} />}
        </Box>
    )
}

export default Dashboard
