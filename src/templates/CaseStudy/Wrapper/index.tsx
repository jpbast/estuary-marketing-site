import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../../../components/layout"

const CaseStudyWrapper = ({ caseStudy, children }) => {
    return (
        <Layout headerTheme="light">
            <article
                className="case-study"
                itemScope
                itemType="http://schema.org/Article"
            >
                <header className="above-the-fold">
                    <div className="content">
                        <h2>{caseStudy.Title}</h2>
                        <h1>{caseStudy.Description}</h1>
                    </div>
                    <div className="logo">
                        <GatsbyImage
                            alt={caseStudy.Title}
                            image={
                                caseStudy.Logo.localFile.childImageSharp.gatsbyImageData
                            }
                            loading="eager"
                        />
                    </div>
                </header>
                {children}
            </article>
        </Layout>
    )
}

export default CaseStudyWrapper
