import React from "react"

import Seo from "../../../components/seo"

import logoUrl from "../../../images/combination-mark__multi-blue.png"

const BlogPostHead = ({
    data: {
        post,
        site: {
            siteMetadata: { siteUrl },
        },
    },
}) => {
    const mappedAuthors = post.authors.map(author => ({
        name: author.name,
        url: author.link,
        image: author.picture && {
            "@type": "ImageObject",
            url: `${siteUrl}/${author.picture.localFile.childImageSharp.fixed.src}`,
        },
    }))

    const postTags = post.tags
        .filter(tag => tag.type === "tag")
        .map(t => t.name)
    return (
        <>
            <Seo
                title={post.title}
                description={post.description ?? ""}
                url={`${siteUrl}/${post.slug}`}
                image={
                    post.hero &&
                    `${siteUrl}${post.hero.localFile.childImageSharp.meta_img.src}`
                }
            />
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    mainEntityOfPage: {
                        "@type": "WebPage",
                        "@id": `${siteUrl}/${post.slug}`,
                    },
                    headline: post.title,
                    description: post.description ?? "",
                    image:
                        post.hero &&
                        `${siteUrl}${post.hero.localFile.childImageSharp.meta_img.src}`,
                    author:
                        post.authors.length > 1
                            ? mappedAuthors
                            : mappedAuthors[0],
                    keywords: postTags,
                    publisher: {
                        "@type": "Organization",
                        name: "Estuary",
                        logo: {
                            "@type": "ImageObject",
                            url: `${siteUrl}${logoUrl}`,
                        },
                    },
                    datePublished: post.machineReadablePublishDate,
                })}
            </script>
        </>
    )
}

export default BlogPostHead
