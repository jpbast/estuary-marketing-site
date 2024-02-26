import React from "react"

import Wrapper from "../layouts/Home/components/Wrapper"
import Header from "../layouts/Home/components/Head"

import Hero from "../layouts/Home/sections/Hero"

const Home = () => {
    return (
        <Wrapper>
            <Hero />
        </Wrapper>
    )
}

export const Head = Header

export default Home
