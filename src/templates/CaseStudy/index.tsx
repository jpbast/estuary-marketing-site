import './style.less'

import React from "react"
import { graphql } from "gatsby"

import dayjs from "dayjs"
import reltime from "dayjs/plugin/relativeTime"

import Header from './Head'
import Wrapper from './Wrapper'

import { ProcessedPost } from '../../components/BlogPostProcessor'

dayjs.extend(reltime)

const CaseStudyTemplate = ({ data: { caseStudy, relatedStudies } }) => {
    return (
        <Wrapper caseStudy={caseStudy}>
            
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
            machineReadablePublishDate: publishedAt(formatString: "YYYY-MM-DD")
            Slug
            Title
            Description
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
        }
    }
`