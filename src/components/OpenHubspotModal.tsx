import * as React from "react"
import {
    CircularProgress,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import HubspotForm from "react-hubspot-form"
// import HubspotModal from "./HubspotModal"

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
                    <React.Suspense fallback={<CircularProgress />}>
                        <HubspotForm
                            portalId={"8635875"}
                            formId={"698e6716-f38b-4bd5-9105-df9ba220e29b"}
                        />
                    </React.Suspense>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default OpenHubspotModal
