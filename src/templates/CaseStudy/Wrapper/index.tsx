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
                <header className="case-study-hero">
                    <div className="content">
                        <h2 className="case-study-header">Case Study</h2>
                        <h1 className="case-study-title">
                            {caseStudy && caseStudy.Description}
                        </h1>
                    </div>
                    <div className="case-study-logo">
                        {caseStudy.Logo && (
                            <GatsbyImage
                                alt={caseStudy.Title}
                                image={
                                    caseStudy.Logo.localFile.childImageSharp
                                        .gatsbyImageData
                                }
                                loading="eager"
                            />
                        )}
                    </div>
                </header>
                {children}
            </article>
        </Layout>
    )
}

export default CaseStudyWrapper
