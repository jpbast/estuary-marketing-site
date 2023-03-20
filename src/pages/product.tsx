import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const ProductPage = () => {
    return (
        <Layout headerTheme="light">
            <div className="product-flow">
                <div className="product-flow-section-one">
                    <div className="product-flow-section-one-left">
                        <h1 className="product-flow-section-one-h1">Streaming ELT made simple</h1>
                        <p className="product-flow-section-one-subtext">Use it free with hands-on support. Scale without bounds.</p>
                        <Link className="product-flow-section-one-try-it-button" to="#">
                            Try it free
                        </Link>
                    </div>
                    <div className="product-flow-section-one-right">
                        <StaticImage
                            placeholder="none"
                            alt="estuary logo"
                            src="../images/estuary-vertical-logo.svg"
                            layout="fixed"
                            className="product-flow-section-one-image"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProductPage