import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export interface BioAuthor {
    name: string;
    link: string;
    picture: {
        localFile: {
            childImageSharp: {
                gatsbyImageData: any
            }
        }
    }
}

export interface BioProps {
    authors: BioAuthor[]
}

const Bio = ({ authors }) => {
    const rendered = (authors ?? []).map(({ picture, name, link }) => {
        const image =
            picture &&
            getImage(picture.localFile.childImageSharp.gatsbyImageData);
        let rendered_name = name && (
            <>
                <strong style={{ marginRight: 8, marginLeft: image ? 0 : 8, fontWeight: 500, color: "black" }}>{name}</strong>
            </>
        );

        let rendered_img = image && (
            <GatsbyImage
                className="bio-avatar"
                image={image}
                alt="Profile picture"
                style={{ marginLeft: 8 }}
                loading="eager"
            />
        );

        let combined = (
            <>
                {rendered_img}
                {rendered_name}
            </>
        )

        if(link) {
            combined = <a href={link} style={{display: "flex", alignItems:"center"}}>{combined}</a>
        }

        return combined;
    })
    if (rendered.length < 1) {
        return null
    }
    return (
        <div className="bio">
            <p style={{ display: "flex", alignItems: "center" }}>
                Written by
                {rendered.map((r, idx) => (
                    <>
                        {r}
                        {idx === rendered.length - 2
                            ? " and "
                            : idx < rendered.length - 2
                            ? ","
                            : null}
                    </>
                ))}
            </p>
        </div>
    )
}

export default Bio
