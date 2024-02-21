import * as React from "react"
import { OutboundLink } from "../components/OutboundLink"

import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

const TakeATour = ({ onClose }) => {
    const onClick = () => {
        localStorage.setItem('@estuary/closeTour', "1")
        onClose?.()
    }

    return (
        <div className="take-a-tour">
            <OutboundLink
                target="_blank"
                href="https://try.estuary.dev/intro_to_cdc_webinar/"
            >
                CDC Best Practices - Join our February 13th webinar
            </OutboundLink>
            <IconButton onClick={onClick}>
                <CloseIcon color="inherit" fontSize="small" />
            </IconButton>
        </div>
    )
}

export default TakeATour
