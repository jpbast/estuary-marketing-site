import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link, graphql, useStaticQuery } from "gatsby"

type TocItem = {
    id: string
    heading: string
    items?: TocItem[]
}

const RenderTocItem = ({ item, depth }: { item: TocItem; depth: number }) => {
    if (depth > 1) {
        return null
    }
    return (
        <>
            <li className={depth > 0 ? "sub-item" : ""}>
                <Link to={`#${item.id}`}>{item.heading}</Link>
            </li>
            {item.items?.length > 0 && (
                <ul>
                    {item.items.map((child, index) => (
                        <RenderTocItem item={child} key={index} depth={depth + 1} />
                    ))}
                </ul>
            )}
        </>
    )
}

export const RenderToc = ({ items }: { items: TocItem[] }) => (
    <div className="table-of-contents">
        <ul>
            {items.map((item, index) => (
                <RenderTocItem item={item} key={index} depth={0} />
            ))}
        </ul>
    </div>
)
