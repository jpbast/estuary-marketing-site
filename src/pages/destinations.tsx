import React from "react"
import { Connectors } from "../components/Connectors"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Sources = () => {
    return (
        <Layout headerTheme={"light"}>
            <Connectors
                connectorType={"materialization"}
                title={"Destinations"}
                description={"D"}
                bottomTitle={"Sources"}
                bottomDescription={"S"}
            />
        </Layout>
    )
}

export const Head = () => {
    return <Seo title={"Destinations"} description={"Estuary helps your team get the most out of the ever-expanding list of valuable databases, warehouses, and other tools so you can focus on insights instead of pipelines."} />
}

export default Sources
