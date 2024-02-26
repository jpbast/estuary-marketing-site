import React from "react"

import Wrapper from "../layouts/Home/components/Wrapper"
import Header from "../layouts/Home/components/Head"

import Hero from "../layouts/Home/sections/Hero"
import MoveTransform from "../layouts/Home/sections/MoveTransform"

const Home = () => {
    return (
        <Wrapper>
            <Hero />
            <MoveTransform />
        </Wrapper>
    )
}

export const Head = Header

export default Home
