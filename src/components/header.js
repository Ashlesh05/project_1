// eslint-disable-next-line 
import React from 'react'
import styled from 'styled-components'
function header() {
  return (
    <Container>
      <a href="#">
        <img src="/images/logo.svg"  alt="" />
      </a>
      <Menu>
        <a href='#'>Model S</a>
        <a href='#'>Model 3</a>
        <a href='#'>Model Y</a>
        <a href='#'>Model X</a>

      </Menu>
      <RightMenu>
      <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
 
      </RightMenu>
    </Container>
  )
}

export default header

const Container=styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 20px;
    top:1;
    left:0;
    right:0;
`

const Menu=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;

    a {
      font-weight:600;
      text-transform:uppercase;
      padding:0 10px;
      flex-wrap:no-wrap;

    }

`
const RightMenu=styled.div`
display:flex;
align-items:center;
a {
  font-weight:600;
  text-transform: uppercase;
  margin-right:10px;
}
.content-container {
    padding: 10%;
    height: 100vh;
    background-color: lightgrey;
    font-size: 64px;
}
`

