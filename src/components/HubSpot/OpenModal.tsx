import * as React from "react"
import {
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    LinearProgress,
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import HubspotForm from "react-hubspot-form"
import HubSpotFormWrapper from "./FormWrapper"

function OpenHubspotModal({
    buttonLabel,
    buttonClass,
    buttonId,
}: {
    buttonLabel: string
    buttonClass: string
    buttonId: string
}) {
    const [openDialog, setOpenDialog] = React.useState(false)

    return (
        <>
            <button
                id={buttonId}
                className={buttonClass}
                onClick={() => {
                    setOpenDialog(true)
                }}
            >
                {buttonLabel}
            </button>
            <Dialog open={openDialog} fullWidth>
                <DialogTitle
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    {buttonLabel}
                    <IconButton onClick={() => setOpenDialog(false)}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <HubSpotFormWrapper />
                </DialogContent>
            </Dialog>
        </>
    )
}

export default OpenHubspotModal
