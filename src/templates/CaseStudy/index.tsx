import './style.less'

import React from "react"
import { graphql } from "gatsby"

import dayjs from "dayjs"
import reltime from "dayjs/plugin/relativeTime"

import Header from './Head'
import Wrapper from './Wrapper'

dayjs.extend(reltime)

const CaseStudyTemplate = ({ data: { caseStudy, relatedStudies } }) => {
    return (
        <Wrapper caseStudy={caseStudy}>
            {/* {caseStudy.body && (
                <section className="blog-post-content">
                    <ProcessedPost
                        body={caseStudy.body.data.childHtmlRehype.html}
                    />
                </section>
            )} */}
            {/* <div className="case-study-related-wrapper">
                <h2 className="case-study-related-header">
                    More of Our Exemplary Work
                </h2>
                {relatedStudies.nodes.slice(0, 3).map(study => (
                    <CaseStudyPostCard {...study} />
                ))}
            </div> */}
        </Wrapper>
    )
}

export default CaseStudyTemplate

export const Head = Header

export const pageQuery = graphql`
    query CaseStudyQueryById($id: String!) {
        site {
            siteMetadata {
                siteUrl
            }
        }
        caseStudy: strapiCaseStudy(id: { eq: $id }) {
            body: Body {
                data {
                    Body
                    childHtmlRehype {
                        html
                    }
                }
            }
            Description
            Slug
            Logo {
                localFile {
                    childImageSharp {
                        gatsbyImageData(
                            layout: FULL_WIDTH
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                        meta_img: fixed(width: 500) {
                            src
                        }
                    }
                }
            }
            Title
            machineReadablePublishDate: publishedAt(formatString: "YYYY-MM-DD")
        }
        relatedStudies: allStrapiCaseStudy(filter: { id: { ne: $id } }) {
            nodes {
                body: Body {
                    data {
                        Body
                        childHtmlRehype {
                            html
                        }
                    }
                }
                Description
                Slug
                Logo {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(
                                layout: FULL_WIDTH
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                            )
                            meta_img: fixed(width: 500) {
                                src
                            }
                        }
                    }
                }
                Title
            }
        }
    }
`