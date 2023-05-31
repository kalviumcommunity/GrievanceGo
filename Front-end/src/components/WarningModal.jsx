import React from 'react'
import {
    Button,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogContent,
    AlertDialogOverlay,
} from '@chakra-ui/react'

const WarningModal = ({ onClose }) => {
    const handleCancel = () => {
        onClose()
    }

    return (
        <>
            <AlertDialog isOpen={true} onClick={handleCancel}>
                <AlertDialogOverlay>
                    <AlertDialogContent
                        maxH="149px"
                        maxW="557px"
                        h="100%"
                        w="100%"
                        bgColor="rgba(169, 160, 222, 1)"
                    >
                        <AlertDialogBody
                            fontSize="18px"
                            maxW="530px"
                            fontFamily="Roboto-Bold"
                            paddingTop="20px"
                        >
                            Are you sure you want to mark this complaint as
                            resolved? This action cannot be undone.{' '}
                        </AlertDialogBody>

                        <AlertDialogFooter fontFamily="Roboto-Bold">
                            <Button bgColor="black" color="white">
                                Resolve
                            </Button>
                            <Button
                                onClick={handleCancel}
                                variant="link"
                                paddingLeft="16px"
                                paddingRight="16px"
                                color="black"
                            >
                                Cancel
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

export default WarningModal
