import "./styles.less"

import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

import Topic from "./Topic"

import { ImageTopic1, ImageTopic2, ImageTopic3, ImageTopic4 } from "./topics"

const SectionRealTimePlatform = () => {
    const [selected, setSelected] = useState(0)

    const handleSelect = (index) => {
        console.log('TRIGGER')
        setSelected(index)
    }

    const topics = [ImageTopic1, ImageTopic2, ImageTopic3, ImageTopic4]
    const ImageTopicDesktop = topics[selected]

    return (
        <div className="section-real-time-platform">
            <div className="container">
                <h3>A platform for real-time ETL and CDC</h3>
                <div className="topic-area">
                    <div className="topics">
                        <Topic
                            title="CDC Replication"
                            description="Millisecond CDC connectors built by Estuary for streaming database replication. Managing tables over 10TB+ at >7GB/s."
                            open={selected === 0}
                            onClick={() => handleSelect(0)}
                        >
                            <ImageTopic1 />
                        </Topic>
                        <Topic
                            title="Streaming ETL for Analytics"
                            description="Join and Transform real-time and history data in SQL or Typescript. Time travel and backfill data from a cloud storage log."
                            open={selected === 1}
                            onClick={() => handleSelect(1)}
                        >
                            <ImageTopic2 />
                        </Topic>
                        <Topic
                            title="Integration for Apps"
                            description="Choose from SaaS and API connetors from Estuary, or import any connector from Meltano, Stitch, or Airbyte"
                            open={selected === 2}
                            onClick={() => handleSelect(2)}
                        >
                            <ImageTopic3 />
                        </Topic>
                        <Topic
                            title="Data pipeline for AI"
                            description="Millisecond CDC connectors built by Estuary for streaming database replication. Managing tables over 10TB+ at >7GB/s."
                            open={selected === 3}
                            onClick={() => handleSelect(3)}
                        >
                            <ImageTopic4 />
                        </Topic>
                    </div>
                    <div className="topic-image">
                        <ImageTopicDesktop />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionRealTimePlatform