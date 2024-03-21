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
        </Seo>
    )
}

export default Head
