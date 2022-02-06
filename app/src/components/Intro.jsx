import React from 'react';
import styled from 'styled-components';
import Woman from "../components/img/woman3.png"
import AnimatedShapes from './AnimatedShapes';



const Container = styled.div`
      height: calc(100vh - 50px);
      display: flex;
      padding: 20px
`
const Left = styled.div`
      height: calc(100vh - 50px);
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
`
const Title = styled.h1`
    width: 60%
    font-size: 60px;
`
const Desc = styled.p`
    width: 60%;
    font-size: 20px;
    margin-top: 20px;
`
const Info = styled.div`
    width: 60%;
    display: flex;
    margin: 50px;
    align-items: centre;
    justify-content: space-between;
`
const Button = styled.button`
    padding: 15px;
    background-color: darkblue;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    border: none;
    letter-spacing: 2px;
    cursor: pointer;
`
const Contact = styled.div`
     display: flex;
     flex-direction: column;
`
const Phone = styled.span`
    color: red;
    font-weight: bold;
`
const ContactText = styled.span`
    color: grey;
    margin-top: 5px;
`

const Right = styled.div`
      height: calc(100vh - 50px);
      width: 40%;
      position: relative;
`
const Image = styled.img`
     width: 100%;
     position: absolute;
     bottom: 25px;
     left: 30px;
     transform: scale(1.4);
`

export default function Intro() {
  return <Container>
      <Left>
          <Title> Challenges in creative age</Title>
          <Desc>We beleive that desigining products and services in close partnership with
              our clients is the only way to have a real impact on their business.
          </Desc>
          <Info>
              <Button>Start a Project</Button>
              <Contact>
                  <Phone>Call Us (966) 565739419</Phone>
                  <ContactText>For any question and concern</ContactText>
              </Contact>

          </Info>
      </Left>
      <Right>
          <Image src={Woman}></Image>
      </Right>
      <AnimatedShapes/>
  </Container>
  
}

