import React from 'react'
import { Box, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import bg2 from '../assets/bg2.png'
import Navbar from './Navbar'
import ComplaintTable from './tables'
import NewComplaintModal from './NewComplaintModal'
import ComplaintViewModal from './ComplaintViewModal'
import WarningModal from './WarningModal'
import ReplyModal from './ReplyModal'

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

    const {
        isOpen: isReplyModalOpen,
        onOpen: openReplyModal,
        onClose: closeReplyModal,
    } = useDisclosure()

    const [selectedComplaint, setSelectedComplaint] = useState(null)
    const handleComplaintClick = complaint => {
        setSelectedComplaint(complaint)
        openComplaintViewModal()
    }
    const handleReplyClick = complaint => {
        setSelectedComplaint(complaint)
        openReplyModal()
    }

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
                onReplyClick={handleReplyClick}
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

export default Dashboard
