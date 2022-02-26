import React from 'react'
import styled from 'styled-components'
import Section from '../section/Section'

const Wrapper = styled.div`

`

function Home() {
  return (
    <Wrapper>
        <Section
            title="Model S"
            id="model-s"
            arrow="true"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
        <Section
            title="Model 3"
            id="model-3"
            description="Order Online for Touchless Delivery"  
            backgroundImg="model-3.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory" Find re
        />
        <Section 
            title="Model X"
            id="model-x"
            description="0rder Online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory" Find relate
        />
        <Section
            title="Model Y"
            id="model-y"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
        <Section
            title="Lowest Cost Solar Panels in America"
            id="lowest"
            description="Money-back guarantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"
        />
        <Section
            title="Solar for New Roofs"
            id="soler"
            description="Solar Roof Costs Less Than a New Roofs"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"
        />
        <Section
            title="Accessories"
            id="accessories"
            description=""
            backgroundImg="accessories.jpg"
            leftBtnText="Shop nowt"
            rightBtnText=""
        />
    </Wrapper>
  )
}

export default Home