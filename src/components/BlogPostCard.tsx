import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Bio from "./bio"

export interface BlogPostCardProps {
    title: string
    slug: string
    publishedAt: string
    tags: {
        Name: string
        Slug: string
        Type: string
    }[]
    authors: {
        name: string
        picture: {
            localFile: {
                childImageSharp: {
                    gatsbyImageData: any
                }
            }
        }
        link: string
    }[]
    hero: {
        localFile: {
            childImageSharp: {
                gatsbyImageData: any
            }
        }
    }
}

export const BlogPostCard = (props: BlogPostCardProps) => (
    <Link to={`/${props.slug}`} className="blogs-post-card">
        {props.hero ? (
            <GatsbyImage
                alt=""
                image={props.hero.localFile.childImageSharp.gatsbyImageData}
                loading="eager"
            />
        ) : null}
        <p className="blogs-post-card-details">
            {props.authors.map(author => author.name).join(", ")} ·{" "}
            {props.publishedAt}
        </p>
        <div className="blogs-post-card-tags">
            {props.tags
                .filter(tag => tag.Type === "tag")
                .slice(0, 1)
                .map(tag =>
                    tag.Name.split(" ")
                        .map(word => `${word[0].toUpperCase()}${word.slice(1)}`)
                        .join(" ")
                )
                .map(tag => (
                    <div className="blogs-post-card-tag">{tag}</div>
                ))}
        </div>
        <div className="blogs-post-card-title">{props.title}</div>
    </Link>
)
