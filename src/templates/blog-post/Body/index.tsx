import React from "react"
import StickyBox from "react-sticky-box"

import RenderToc from "../../../components/BlogPostToc"
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

            <div />
        </section>
    )
}

export default BlogPostBody
