import React from "react"
import clsx from "clsx"

const SectionRealTimePlatformTopic = ({ title, description, children, open, onClick }) => {
    return (
        <div className="topic" onClick={onClick}>
            <div className="content">
                <p className={clsx('title', open && 'open')}>{title}</p>
                {open && <div className="image">
                    {children}
                </div>}
                {open && <p className="description">{description}</p>}
            </div>
            <div className={clsx('border', open && 'open')} />
        </div>
    )
}

export default SectionRealTimePlatformTopic