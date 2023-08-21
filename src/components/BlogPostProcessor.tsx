import * as React from "react"
// import unified from "unified"
// import rehypeParse from "rehype-parse"
// import rehypeReact from "rehype-react"
// import ImgSharpInline from "../../plugins/estuary-rehype-transformers/src/ImgSharp"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export const ProcessedPost = ({
    body
}: {
    body: string,
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
                <div className="popular-articles">
                    <h3>Popular Articles</h3>
                    <ul>
                        <li>
                            <StaticImage
                                quality={90}
                                placeholder="none"
                                alt="debezium alternatives"
                                src="../images/popular-articles/debezium_alternatives_cover_image_748007bac5.avif"
                                width={48}
                                height={48}
                                layout="fixed"
                                className="icon-image"
                            />
                            <Link to="/debezium-alternatives">Why you should re-consider Debezium: Challenges & Alts</Link>
                        </li>
                        <li>
                            <StaticImage
                                quality={90}
                                placeholder="none"
                                alt="Guide to SQL Server CDC"
                                src="../images/popular-articles/eccbd3_sql_server_cdc_8a24e6c7c2.avif"
                                width={48}
                                height={48}
                                layout="fixed"
                                className="icon-image"
                            />
                            <Link to="/guide-change-data-capture-sql-server">Guide to SQL Server CDC</Link>
                        </li>
                        <li>
                            <StaticImage
                                quality={90}
                                placeholder="none"
                                alt="The Real-time Data Landscape"
                                src="../images/popular-articles/16eed6_Real_time_Data_Landscape_3_78206a6d80.avif"
                                width={48}
                                height={48}
                                layout="fixed"
                                className="icon-image"
                            />
                            <Link to="/the-real-time-data-landscape">The Real-time Data Landscape</Link>
                        </li>
                        <li>
                            <StaticImage
                                quality={90}
                                placeholder="none"
                                alt="Don't Use Kafka as a Data Lake"
                                src="../images/popular-articles/c5ca61_kafka_as_data_lake_a361174828.avif"
                                width={48}
                                height={48}
                                layout="fixed"
                                className="icon-image"
                            />
                            <Link to="/kafka-as-data-lake">Don't Use Kafka as a Data Lake, Do this instead</Link>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-cta">
                    <h3>Start streaming your data for free</h3>
                    <Link to="https://dashboard.estuary.dev/register" className="pipeline-link">Build a Pipeline</Link>
                </div>
            </div>
            <div className="post-content" dangerouslySetInnerHTML={{__html: body}} />
        </div>
    )
}
