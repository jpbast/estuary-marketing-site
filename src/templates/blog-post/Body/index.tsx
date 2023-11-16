import React from "react"
import StickyBox from "react-sticky-box"

import RenderToc from "../../../components/BlogPostToc"
import PanelCTA from "../../../components/PanelCTA"
import { ProcessedPost } from "../../../components/BlogPostProcessor"

const BlogPostBody = ({ data, sticky }) => {
    if (!data) return null;

    return (
        <section className="blog-post-content">
            {sticky && (
                <StickyBox
                    offsetBottom={16}
                    offsetTop={16}
                    className="post-sidebar"
                >
                    <RenderToc items={data.childHtmlRehype.tableOfContents} />
                </StickyBox>
            )}
            {!sticky && <RenderToc items={data.childHtmlRehype.tableOfContents} />}

            <ProcessedPost
                body={data.childHtmlRehype.html}
            />

            {sticky && (
                <StickyBox
                    offsetBottom={16}
                    offsetTop={16}
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
