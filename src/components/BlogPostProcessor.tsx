import * as React from "react"
import unified from "unified"
import rehypeParse from "rehype-parse"
import rehypeReact from "rehype-react"
import ImgSharpInline from "../../plugins/estuary-rehype-transformers/src/ImgSharp"
import { Link } from "gatsby"

export const ProcessedPost = ({
    body, slug, tableOfContents
}: {
    body: string,
    slug: string,
    tableOfContents: { // we have an option to render table of Contents using this(only main elements) or extract subnav evelement from html string see implemented below
        id: string,
        heading: string
    }[]
}) => {
    // return (JSON.stringify(body,null,4))
    const parser = new DOMParser();
    const html = parser.parseFromString(body, 'text/html');
    const navArray = []
    let h2Index = 0
    html.querySelectorAll("h2, h3").forEach((item, index)=>{
            index !== 0 &&
            navArray.push({
                itemTag: item.tagName,
                itemLink: item.id,
                itemName: item.innerText,
            }) 
    })
    return (
        <div className="blog-post-content">
            <div className="post-sidebar">
                <div className="table-of-contents">
                    <h3>Table of Contents</h3>
                    <ul>
                        {navArray.map((item, index)=>{
                            item.itemTag !== 'H3' && h2Index ++
                            return(
                                <li key={index} className={item.itemTag === 'H3' ? 'sub-item' : ''}>
                                    <Link to={`#${item.itemLink}`}><span>{item.itemTag !== 'H3' && h2Index}</span> {item.itemName}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="post-content" dangerouslySetInnerHTML={{__html: body}} />
        </div>
    )
}
