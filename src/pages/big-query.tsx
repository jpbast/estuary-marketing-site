import React from "react"

import Wrapper from "../layouts/BigQuery/components/Wrapper"
import Header from "../layouts/BigQuery/components/Head"

import Hero from "../layouts/BigQuery/sections/Hero"
import ChangeData from "../layouts/BigQuery/sections/ChangeData"
import Pipelines from "../layouts/BigQuery/sections/Pipelines"
import RealTime from "../layouts/BigQuery/sections/RealTime"
import TakeATour from "../layouts/BigQuery/sections/TakeATour"
import TheAutomation from "../layouts/BigQuery/sections/TheAutomation"

const BigQuery = () => {
    return (
        <Wrapper>
            <Hero />
            <ChangeData />
            <Pipelines />
            <RealTime />
            <TakeATour />
            <TheAutomation />
        </Wrapper >
    )
}

export const Head = Header

export default BigQuery