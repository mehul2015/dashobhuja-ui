import styled from 'styled-components';
import bg1 from '../assets/bg-1.png';
import bg3 from '../assets/bg-3.png';

import React from 'react';

const Container = styled.div`
  height: 102vh;
  width: 100%;
  background-image: url(${bg1});
  background-repeat: no-repeat;
  background-size: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: green; */
`;
const TextContainer = styled.div`
  height: 80vh;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: black;
  flex-direction: column;
  /* background-color: orange; */
  margin-left: 400px;
`;
const Heading = styled.h1`
  font-size: 80px;
  font-family: 'Tiro Devanagari Hindi', serif;
  letter-spacing: 4px;
  /* text-decoration: underline;
  text-decoration-color: #50835f; */
`;
const Caption = styled.h3`
  margin-top: 20px;
  font-size: 20px;
`;

const Dash = styled.span`
  font-size: 85px;
  color: #d04632;
`;

const ImgContainer = styled.div`
  width: 20%;

  /* background-color: black; */
`;
const Image = styled.img``;

const Hero = () => {
  return (
    <Container>
      <TextContainer>
        <Heading>
          <Dash>दश</Dash>BHUJA
        </Heading>
        <Caption>All for one, one for all.</Caption>
      </TextContainer>
      <ImgContainer>
        <Image src={require('../assets/bg-3.png')} />
      </ImgContainer>
    </Container>
  );
};

export default Hero;
