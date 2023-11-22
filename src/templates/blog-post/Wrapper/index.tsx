import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../../../components/layout"
import Bio from "../../../components/bio"

const BlogPostWrapper = ({ post, children }) => {
    return (
        <Layout headerTheme="light" fixedHeader>
            <article
                className="blog-post"
                itemScope
                itemType="http://schema.org/Article"
            >
                <header>
                    <div className="header-info">
                        <span className="blog-post-date">
                            {post.publishedAt}
                        </span>
                        <h1>{post.title}</h1>
                        <Bio authors={post.authors} />
                    </div>
                    <div className="hero-image">
                        {post.hero ? (
                            <GatsbyImage
                                alt={post.title}
                                image={
                                    post.hero.localFile.childImageSharp
                                        .gatsbyImageData
                                }
                                loading="eager"
                            />
                        ) : null}
                    </div>
                </header>
                <div className="post-description">
                    {post && post.description}
                </div>
                {children}
            </article>
        </Layout>
    )
}

export default BlogPostWrapper
