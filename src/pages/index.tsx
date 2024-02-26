import React from "react"

import Wrapper from "../layouts/Home/components/Wrapper"
import Header from "../layouts/Home/components/Head"

import Hero from "../layouts/Home/sections/Hero"
import MoveTransform from "../layouts/Home/sections/MoveTransform"
import CaseStudy from "../layouts/Home/sections/CaseStudy"
import CodeOrNo from "../layouts/Home/sections/CodeOrNo"
import PipelinesBuilt from "../layouts/Home/sections/PipelinesBuilt"
import CutPipeline from "../layouts/Home/sections/CutPipeline"
import Testimonial from "../layouts/Home/sections/Testimonial"

const Home = () => {
    return (
        <Wrapper>
            <Hero />
            <MoveTransform />
            <CaseStudy />
            <CodeOrNo />
            <PipelinesBuilt />
            <CutPipeline />
            <Testimonial />
        </Wrapper>
    )
}

export const Head = Header

export default Home
