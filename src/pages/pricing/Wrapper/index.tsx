import React from "react"
import Layout from "../../../components/layout"

const PricingWrapper = ({ children }) => {
    return (
        <Layout headerTheme="light">
            <div className="pricing-page">
                {children}
            </div>
        </Layout >
    )
}

export default PricingWrapper
