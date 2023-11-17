import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"

import dayjs from "dayjs"
import reltime from "dayjs/plugin/relativeTime"

import Body from "./Body"
import Wrapper from "./Wrapper"

import RelatedPosts from "../../components/RelatedPosts"

dayjs.extend(reltime)

const BlogPostTemplate = ({ data: { previous, next, post }, pageContext }) => {
    const [windowWidth, setWindowWidth] = useState(
        typeof window === "undefined" ? 1500 : window.innerWidth
    )

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <Wrapper post={post}>
            <Body data={post?.body?.data} sticky={windowWidth > 767} />
            <RelatedPosts />
        </Wrapper>
    )
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug(
        $id: String!
        $previousPostId: String
        $nextPostId: String
    ) {
        site {
            siteMetadata {
                siteUrl
            }
        }
        post: strapiBlogPost(id: { eq: $id }) {
            title: Title
            publishedAt(formatString: "MMMM D, YYYY")
            machineReadablePublishDate: publishedAt(formatString: "YYYY-MM-DD")
            description: Description
            slug: Slug
            body: Body {
                data {
                    Body
                    childHtmlRehype {
                        html
                        tableOfContents
                    }
                }
            }
            authors {
                name: Name
                picture: Picture {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(
                                layout: CONSTRAINED
                                placeholder: BLURRED
                                quality: 100
                            )
                            fixed(width: 60) {
                                src
                            }
                        }
                    }
                }
                link: Link
            }
            hero: Hero {
                localFile {
                    childImageSharp {
                        gatsbyImageData(
                            layout: FULL_WIDTH
                            placeholder: BLURRED
                            # aspectRatio: 2
                            formats: [AUTO, WEBP, AVIF]
                        )
                        meta_img: fixed(width: 500) {
                            src
                        }
                        # Further below in this doc you can learn how to use these response images
                    }
                }
            }
            tags: tags {
                name: Name
                type: Type
            }
        }
        previous: strapiBlogPost(id: { eq: $previousPostId }) {
            title: Title
            slug: Slug
            authors {
                name: Name
                picture: Picture {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(
                                layout: CONSTRAINED
                                placeholder: BLURRED
                            )
                        }
                    }
                }
                link: Link
            }
        }
        next: strapiBlogPost(id: { eq: $nextPostId }) {
            title: Title
            slug: Slug
            authors {
                name: Name
                picture: Picture {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(
                                layout: CONSTRAINED
                                placeholder: BLURRED
                            )
                        }
                    }
                }
                link: Link
            }
        }
    }
    `
