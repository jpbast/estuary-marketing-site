import React from "react"

import Seo from "../../../components/seo"

export const Head = ({ data: { post } }) => {
    return (
        <Seo
            title={"Pricing"}
            description={
                "Reduce your data costs and latency with managed streaming CDC and ETL pipelines."
            }
        >
            <script src="https://tag.clearbitscripts.com/v1/pk_4817f0c2cea3e0595f4602d5c2a8e556/tags.js" referrerPolicy="strict-origin-when-cross-origin" />
        </Seo>
    )
}

export default Head
