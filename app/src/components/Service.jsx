import React from 'react';
import styled from "styled-components";
import Woman from "./img/woman.png"

const Container = styled.div`
      display: flex;
`
const Left = styled.div`
      width: 50%;
`
const Image = styled.img`
      height: 100%;
      margin-left: 75px;
      position: relative;
      top: 0px;
      
      

`
const Right = styled.div`
     width: 50%;
`

export default function Service() {
  return <Container>
      <Left>
          <Image src={Woman}/>

      </Left>
      <Right>

      </Right>
  </Container>;
}
