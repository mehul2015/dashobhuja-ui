import React from 'react';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';

import bg6 from '../assets/bg-6.png';

const Container = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* background-color: green; */

  margin-top: -350px;
`;
const TextContainer = styled.div`
  height: 40%;
  width: 60%;
  font-size: 20px;
  text-align: center;
  margin-top: 40px;
`;

const Image = styled.img`
  width: 500px;
`;

const About = () => {
  return (
    <Container>
      <Avatar
        src={require('../assets/about.jpg')}
        sx={{ width: 230, height: 230, border: '5px solid black' }}
      />
      <TextContainer>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
        magnam officiis voluptatibus culpa error quo sit? Inventore nesciunt
        excepturi optio blanditiis qui exercitationem, dolorum sint facere! Iste
        vel vero architecto. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ducimus commodi odio id vero hic. Alias tenetur, numquam eveniet
        dolorem obcaecati rem ipsum impedit commodi quo quasi consequuntur eius
        nemo ratione.
      </TextContainer>
      <Image src={require('../assets/bg-4.png')} />
    </Container>
  );
};

export default About;
