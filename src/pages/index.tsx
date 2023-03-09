import * as React from "react"
import Layout from "../components/layout"
import SectionOne from "../components/SectionOne"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {

    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    const siteTitle = data.site.siteMetadata?.title || `Title`


    return (
        <Layout location={location} title={siteTitle}>
        <SectionOne/>
        </Layout>

    )
}

export default IndexPage