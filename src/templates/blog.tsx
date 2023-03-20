import * as React from "react"
import { Link, graphql, PageProps, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import clsx from "clsx"
import { BlogPostCard } from "../components/BlogPostCard"

interface BlogIndexProps {
    data: {
        allStrapiBlogPost: {
            nodes: any[]
        }
    }
    pageContext: {
        blogPostIds: String[]
        tabCategories: Array<{
            Type: String
            Slug: String
            Name: String
        }>
        categoryTitle: String
        categorySlug: String
    }
}

const BlogIndex = ({
    data,
    pageContext: { categoryTitle, categorySlug, tabCategories, blogPostIds },
}: BlogIndexProps) => {
    console.log(blogPostIds)
    const posts = data.allStrapiBlogPost.nodes

    return (
        <Layout>
            <div className="blogs-index-wrapper">
                <div className="blogs-index-header-wrapper">
                    <div className="blogs-index-header">
                        <div className="blog-post-header-vectors">
                            <StaticImage
                                placeholder="none"
                                alt="estuary logo top"
                                src="../images/estuary-top-logo-vector-2.svg"
                                className="blog-post-header-vector"
                                layout="constrained"
                                style={{
                                    zIndex: 1,
                                }}
                            />
                            <StaticImage
                                placeholder="none"
                                alt="estuary logo bottom"
                                src="../images/estuary-top-logo-vector-1.svg"
                                className="blog-post-header-vector"
                                layout="constrained"
                            />
                        </div>
                        <h2>Blog</h2>
                        <p>
                            More about Estuary and related technologies,
                            straight from the team.
                        </p>
                        <p>
                            Our blog breaks down basic concepts and takes you
                            into the minds of our engineers. We also dig into
                            the business principles that guide our company and
                            allow us to build great solutions for yours.
                        </p>
                    </div>
                </div>
                <div className="blogs-index-tabs">
                    {tabCategories.map(category => (
                        <Link
                            to={`/blog/${category.Slug}`}
                            className={clsx("blogs-index-tab", {
                                "blogs-index-tab-active":
                                    category.Slug === categorySlug,
                            })}
                        >
                            {category.Name}
                        </Link>
                    ))}
                </div>
                <div className="blogs-index-body">
                    {posts.map(post => (
                        <BlogPostCard {...post} />
                    ))}
                    {/* <ol style={{ listStyle: `none` }}>
                        {posts.map(post => {
                            const title = post.title
                            return (
                                <li key={post.slug}>
                                    <article
                                        className="post-list-item"
                                        itemScope
                                        itemType="http://schema.org/Article"
                                    >
                                        <header>
                                            <h2>
                                                <Link
                                                    to={`/${post.slug}`}
                                                    itemProp="url"
                                                >
                                                    <span itemProp="headline">
                                                        {title}
                                                    </span>
                                                </Link>
                                            </h2>
                                            <small>{post.publishDate}</small>
                                        </header>
                                        <section>
                                            {post.excerpt ? (
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: post.excerpt
                                                            .childMarkdownRemark
                                                            .html,
                                                    }}
                                                    itemProp="description"
                                                />
                                            ) : null}
                                        </section>
                                    </article>
                                </li>
                            )
                        })}
                    </ol> */}
                </div>
            </div>
        </Layout>
    )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ data: { post } }) => {
    return <Seo title={"Blog"} description={"Estuary Blog"} />
}

export const pageQuery = graphql`
    # We need to pass in IDs because we do the filtering in gatsby-node.ts
    # because gatsby won't let us filter by elemMatch on multiple conditions
    # i.e type: "category" AND slug: "..."
    query BlogData($blogPostIds: [String]!) {
        site {
            siteMetadata {
                title
            }
        }
        allStrapiBlogPost(
            filter: { id: { in: $blogPostIds } }
            sort: [{ publishedAt: DESC }]
        ) {
            nodes {
                title: Title
                slug: Slug
                publishedAt(formatString: "MMMM D, YYYY")
                tags: tags {
                    Name
                    Slug
                    Type
                }
                authors {
                    name: Name
                    picture: Picture {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(layout: CONSTRAINED)
                            }
                        }
                    }
                    link: Link
                }
                hero: Hero {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(
                                layout: CONSTRAINED
                                placeholder: BLURRED
                                aspectRatio: 1.7
                                formats: [AUTO, WEBP, AVIF]
                            )
                            # Further below in this doc you can learn how to use these response images
                        }
                    }
                }
            }
        }
    }
`
