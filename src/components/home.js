import React from 'react'
import styledComponents from 'styled-components'
import Section from "./Section"
import Section2 from './Section2'
function home() {
  return (
    < CaptainContainer>
           <Container1>

          <Section
            title="Model S"
            description="Order Online for Touchless Delievery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            />
          <Section2
                      title="Model Y"
                      description="Order Online for Touchless Delievery"
                      backgroundImg="model-y.jpg"
                      leftBtnText="Custom Order"
                      rightBtnText="Existing Inventory"
            /></Container1>
            <Container2>
      <Section2
                      title="Model 3"
                      description="Order Online for Touchless Delievery"
                      backgroundImg="model-3.jpg"
                      leftBtnText="Custom Order"
                      rightBtnText="Existing Inventory"
            />
                  <Section
                        title="Model X"
                        description="Order Online for Touchless Delievery"
                        backgroundImg="model-x.jpg"
                        leftBtnText="Custom Order"
                        rightBtnText="Existing Inventory"
              /></Container2>
       
    </CaptainContainer>
    
  )
}

export default home
const CaptainContainer=styledComponents.div``
const Container1=styledComponents.div``
const Container2=styledComponents.div``