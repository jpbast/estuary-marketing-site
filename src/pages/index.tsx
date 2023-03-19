import * as React from "react"
import Layout from "../components/layout"
import SectionOne from "../components/SectionOne"
import { useStaticQuery, graphql } from "gatsby"
import SectionTwo from "../components/SectionTwo"
import SectionThree from "../components/SectionThree"
import SectionFour from "../components/SectionFour"
import SectionFive from "../components/SectionFive"
import SectionSix from "../components/SectionSix"
import Seo from "../components/seo"

const IndexPage = () => {
    return (
        //@ts-ignore
        <Layout headerTheme="dark">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
        </Layout>
    )
}

export const Head = ({ data: { post } }) => {
    const titleQuery = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    const siteTitle = titleQuery.site.siteMetadata?.title || `Estuary`
    return <Seo title={siteTitle} description={"Estuary"} />
}

export default IndexPage
