import * as React from "react"
import { Link, graphql, PageProps, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import clsx from "clsx"
import { BlogPostCard } from "../components/BlogPostCard"
import SearchIcon from "@mui/icons-material/Search"
import { useLunr } from "react-lunr"
import FlowLogo from "../svgs/flow-logo.svg"

interface BlogIndexProps {
    data: {
        allStrapiBlogPost: {
            nodes: any[]
        }
        localSearchPosts: {
            index: any
            store: any
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
    const posts = data.allStrapiBlogPost.nodes

    const index = React.useMemo(
        () => JSON.parse(data.localSearchPosts.index),
        [data.localSearchPosts.index]
    )

    const [query, setQuery] = React.useState("")
    const results = useLunr(
        query.length > 0
            ? query
                  .split(" ")
                  .map(term => `${term}~2`)
                  .join(" ")
            : "",
        index,
        data.localSearchPosts.store
    )

    return (
        <Layout headerTheme="light">
            <div className="blogs-index-wrapper">
                <div className="blogs-index-header-wrapper">
                    <div className="blogs-index-header">
                        <div className="blog-post-header-vectors">
                            <FlowLogo className="blog-post-header-vector" />
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
                <div className="blogs-index-tab-bar">
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
                    <div style={{ flexGrow: 1 }} />
                    <div className="blogs-index-search">
                        <SearchIcon className="blogs-index-input-adornment" />
                        <input
                            placeholder="Search Blog Posts"
                            type="text"
                            value={query}
                            onChange={evt => setQuery(evt.target.value)}
                        />
                    </div>
                </div>
                <div className="blogs-index-body">
                    {(query ? results : posts).map(post => (
                        <BlogPostCard {...post} />
                    ))}
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
        localSearchPosts {
            index
            store
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
                                gatsbyImageData(layout: CONSTRAINED, width: 50)
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
                                width: 400
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
