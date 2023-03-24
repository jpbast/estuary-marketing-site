import React from "react"
import { Connectors } from "../components/Connectors"
import Layout from "../components/layout"

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

export default Sources
