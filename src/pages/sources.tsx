import React from "react"
import { Connectors } from "../components/Connectors"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Sources = () => {
    return (
        <Layout headerTheme={"light"}>
            <Connectors
                connectorType={"capture"}
                title={"Sources"}
                description={"S"}
                bottomTitle={"Destinations"}
                bottomDescription={"D"}
            />
        </Layout>
    )
}

export const Head = () => {
    return <Seo title={"Sources"} description={"Capture the most up-to-date view of your business metrics across all data sources, including databases, SaaS, warehouses, and filestores."} />
}

export default Sources
