import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const RelatedPosts = () => {
    const {popularArticles} = useStaticQuery(graphql`
        query GetPopularArticles {
            popularArticles:  allStrapiBlogPost(
                sort: { publishedAt: DESC }
                filter: {tags: {elemMatch: {Name: {eq: "popular" }}}}
            ) {
                nodes {
                    updatedAt
                    slug: Slug
                    id
                    hero: Hero {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(
                                    layout: CONSTRAINED
                                    width: 400
                                    placeholder: BLURRED
                                    aspectRatio: 1.7
                                    formats: [AUTO, WEBP, AVIF]
                                )
                                # Further below in this doc you can learn how to use these response images
                            }
                        }
                    }
                    title: Title
                    tags {
                        Name
                        Slug
                        Type
                        IsTab
                    }
                }
            }
        }
    `)

    return (
        <div className="related-post">
            <div className="heading">
                <h2>Popular Articles</h2>
            </div>
            <div className="related-index-body">
                {popularArticles?.nodes &&
                    popularArticles?.nodes?.map(
                        (post: any, index: number) => (
                            <Link
                                to={`/${post.Slug}`}
                                className="related-post-card"
                                key={index}
                            >
                                <GatsbyImage
                                    image={
                                        post?.hero?.localFile
                                            ?.childImageSharp
                                            ?.gatsbyImageData
                                    }
                                    alt="debezium alternatives"
                                    className="icon-image popular-articles-image related-post-image"
                                />
                                <div className="related-post-card-title">
                                    {post.title}
                                </div>
                                <div className="related-post-card-description">
                                    {post.description}
                                </div>
                            </Link>
                        )
                    )}
            </div>
        </div>
    )
}

export default RelatedPosts
