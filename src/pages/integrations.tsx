import React from 'react'
import { Connectors } from "../components/Connectors"
import Layout from "../components/layout"

const Integrations = () => {
    return (
        <Layout headerTheme={"light"}>
            {/* //refactor to include sources and destinations for search and grid */}
            <Connectors
                connectorType={"capture"}
                title={"Integrations"}
                description={"Capture from clouds, databases, and SaaS apps, create real-time transformations and materialized views, for a consistent, exact copy of your data powering both analytics and operations."}
                bottomTitle={"Destinations"}
                bottomDescription={"You bring the warehouse, we’ll fill it with data. We connect to Amazon Redshift, Google BigQuery, Postgres, Snowflake, and more."}
                showAllConnectors={true}
            />
        </Layout>
    )
}

export default Integrations