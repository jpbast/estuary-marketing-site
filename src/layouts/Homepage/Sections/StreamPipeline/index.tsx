import "./styles.less"

import React from "react"

import Checkmark from "../../../../svgs/light-checkmark.svg"

const SectionStreamPipeline = () => {
    return (
        <div className="section-stream-pipeline">
            <div className="container">
                <div className="content">
                    <p className="title">
                        Streaming Pipelines.
                        <span className="break-line">Simple to deploy.</span>
                        <span className="break-line">Simply Priced. </span>
                    </p>
                </div>
                <div className="topics">
                    <div className="topic">
                        <Checkmark className="icon" />
                        <p className="text">$1/GB of data moved + $.14/connector/hour</p>
                    </div>
                    <div className="topic">
                        <Checkmark className="icon" />
                        <p className="text">50% less than competing ETL/ELT solutions</p>
                    </div>
                    <div className="topic">
                        <Checkmark className="icon" />
                        <p className="text">&#060;100ms latency on streaming sinks/sources</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionStreamPipeline