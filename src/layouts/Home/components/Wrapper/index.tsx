import React from "react"

import Layout from "../../../../components/layout"

const ProductWrapper = ({ children }) => {
    return (
        <Layout headerTheme="light">
            {children}
        </Layout>
    )
}

export default ProductWrapper
