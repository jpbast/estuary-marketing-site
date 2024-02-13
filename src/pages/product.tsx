import React from "react"

import Wrapper from "../layouts/Product/components/Wrapper"

import Hero from "../layouts/Product/sections/Hero"
import DataIntoStream from "../layouts/Product/sections/DataIntoStream"
import TakeATour from "../layouts/Product/sections/TakeATour"
import OurConnectors from "../layouts/Product/sections/OurConnectors"
import TakeControlBack from "../layouts/Product/sections/TakeControlBack"

const Product = () => {
    return (
        <Wrapper>
            <Hero />
            <DataIntoStream />
            <TakeATour />
            <OurConnectors />
            <TakeControlBack />
        </Wrapper >
    )
}

export default Product