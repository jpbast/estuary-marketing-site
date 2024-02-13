import React from "react"

import Wrapper from "../layouts/Product/components/Wrapper"

import Hero from "../layouts/Product/sections/Hero"
import DataIntoStream from "../layouts/Product/sections/DataIntoStream"
import TakeATour from "../layouts/Product/sections/TakeATour"

const Product = () => {
    return (
        <Wrapper>
            <Hero />
            <DataIntoStream />
            <TakeATour />
        </Wrapper >
    )
}

export default Product