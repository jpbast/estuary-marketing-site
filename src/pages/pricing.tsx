import "../layouts/Pricing/style.less"

import React from "react"

import Header from "../layouts/Pricing/Head"
import Wrapper from "../layouts/Pricing/Wrapper"

import Hero from "../layouts/Pricing/Sections/Hero"
import Plans from "../layouts/Pricing/Sections/Plans"
import CostCalculator from "../layouts/Pricing/Sections/CostCalculator"
import PricingComparison from "../layouts/Pricing/Sections/PricingComparison"
import FrequentlyQuestions from "../layouts/Pricing/Sections/FrequentlyQuestions"

const PricingPage = () => {
    return (
        <Wrapper>
            <Hero />
            <Plans />
            <CostCalculator />
            <PricingComparison />
            <FrequentlyQuestions />
        </Wrapper >
    )
}

export const Head = Header

export default PricingPage
