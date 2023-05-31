import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import bg2 from '../assets/bg2.png'
import Navbar from './Navbar'
import ComplaintTable from './tables'
import NewComplaintModal from './NewComplaintModal'
import ComplaintViewModal from './ComplaintViewModal'
import WarningModal from './WarningModal'

const Dashboard = () => {
    const [isNewComplaintModalOpen, setNewComplaintModalOpen] = useState(false)
    const [isComplaintViewModalOpen, setComplaintViewModalOpen] =
        useState(false)
    const [selectedComplaint, setSelectedComplaint] = useState(null)
    const [isWarningModalOpen, setWarningModalOpen] = useState(false)

    const openNewComplaintModal = () => {
        setNewComplaintModalOpen(true)
    }

    const closeNewComplaintModal = () => {
        setNewComplaintModalOpen(false)
    }

    const openComplaintViewModal = complaint => {
        setSelectedComplaint(complaint)
        setComplaintViewModalOpen(true)
    }

    const closeComplaintViewModal = () => {
        setSelectedComplaint(null)
        setComplaintViewModalOpen(false)
    }

    const openWarningModal = () => {
        setWarningModalOpen(true)
    }

    const closeWarningModal = () => {
        setWarningModalOpen(false)
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
                onComplaintClick={openComplaintViewModal}
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
