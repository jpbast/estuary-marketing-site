import React from "react"
import StickyBox from "react-sticky-box"

import RenderToc from "../../../components/BlogPostToc"
import PanelCTA from "../../../components/PanelCTA"
import { ProcessedPost } from "../../../components/BlogPostProcessor"

const BlogPostBody = ({ data, sticky, small }) => {
    if (!data) return null;

    const offsetTop = window.innerHeight / 2 - 200 || 16

    return (
        <section className="blog-post-content">
            {sticky && (
                <StickyBox
                    offsetBottom={16}
                    offsetTop={offsetTop}
                    className="post-sidebar"
                >
                    <RenderToc items={data.childHtmlRehype.tableOfContents} />
                    {small && <PanelCTA />}
                </StickyBox>
            )}
            {!sticky && <RenderToc items={data.childHtmlRehype.tableOfContents} />}

            <ProcessedPost
                body={data.childHtmlRehype.html}
            />

            {sticky && !small && (
                <StickyBox
                    offsetBottom={16}
                    offsetTop={offsetTop}
                    className="post-sidebar-right"
                >
                    <PanelCTA />
                </StickyBox>
            )}
            {!sticky && <PanelCTA />}
        </section>
    )
}

export default BlogPostBody
