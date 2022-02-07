import React, { useState } from 'react';
import styled from "styled-components";
import Woman from "./img/woman.png"
import MiniCard from './MiniCard';
import Play from "./img/play.png"

const Container = styled.div`
      display: flex;
      height: 100%;
      @media only screen and (max-width: 480px){
        flex-direction: column;
    }

`
const Left = styled.div`
      width: 50%;
      @media only screen and (max-width: 480px){
        display: none;
    }

`
const Image = styled.img`
      height: 100%;
      position: relative;
      top: 200px;
      right: 100px;
      
      
      
      

`
const Right = styled.div`
     width: 50%;
     @media only screen and (max-width: 480px){
        width: 100%;
    }

`
const Wrapper = styled.div`
     padding: 50px;
     display: flex;
     flex-direction: column;
     @media only screen and (max-width: 480px){
        padding: 20px;
            
    }

`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    font-size: 20px;
    color: #555;
    margin-top: 20px;

`
const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`
const Button = styled.button`
    width: 180px;
    border: none;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    padding: 15px;
    margin-top: 50px;
    cursor: pointer;
`
const Icon = styled.img`
    width: 20px;
    margin-right: 10px;
`

export default function Service() {

      

  return <Container>
      <Left>
          <Image src={Woman}/>
          
          

      </Left>
      <Right>
            <Wrapper>
                  <Title>Simple process to start</Title>
                  <Desc>
                        We provide digital experience services to startups and small
                        businesses that are looking for a partner to their digital media, design &
                        development, lead generation and communication requirements. We work
                        with you, not for you. Although we have great resources.
                  </Desc>
                  <CardContainer>
                        <MiniCard/>
                        <MiniCard/>
                        <MiniCard/>
                  </CardContainer>

                  <Button><Icon src={Play}/>How it works</Button>

            </Wrapper>

      </Right>

      
  </Container>;
}
