import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const LpPodcats = () => {
    return (
        <Layout headerTheme="light">
            <div className="frame-wrap">
                <iframe
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FxsxbnLUnqIhrz00xQssxck%2FEstuary%3Fpage-id%3D233%253A2%26type%3Ddesign%26node-id%3D238-403%26viewport%3D980%252C298%252C0.21%26scaling%3Dmin-zoom%26starting-point-node-id%3D238%253A403"
                    allowFullScreen
                ></iframe>
            </div>
        </Layout>
    )
}

export const Head = () => {
    return (
        <Seo
            title={"Solutions"}
            description={
                "Estuary allows enterprises of any size to deploy true real-time pipelines that scale for high-volume use cases — without making difficult trade-offs or investing in complex infrastructure."
            }
        />
    )
}

export default LpPodcats
