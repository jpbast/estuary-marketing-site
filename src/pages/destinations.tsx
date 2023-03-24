import React from "react"
import { Connectors } from "../components/Connectors"
import Layout from "../components/layout"

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

export default Sources
