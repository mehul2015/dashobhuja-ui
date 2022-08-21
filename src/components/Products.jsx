import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styled from 'styled-components';

import img1 from '../assets/products/1.jpg';
import img2 from '../assets/products/2.jpg';
import img3 from '../assets/products/3.jpg';
import img4 from '../assets/products/4.jpg';
import img5 from '../assets/products/5.jpg';
import img6 from '../assets/products/6.jpg';
import img7 from '../assets/products/7.jpg';
import img8 from '../assets/products/8.jpeg';
import img9 from '../assets/products/9.jpeg';
import img10 from '../assets/products/10.jpg';
import img11 from '../assets/products/11.JPG';

import bg7 from '../assets/bg-7.png';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  /* background-color: green; */
  background: url(${bg7});
  background-size: 1600px;
  /* background-repeat: no-repeat; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const InnerContainer = styled.div`
  height: 100vh;
  width: 64%;
  background-color: white;
  margin-top: 600px;
`;

export default function Products() {
  return (
    <Container>
      <InnerContainer></InnerContainer>
    </Container>
  );
}

const itemData = [
  {
    img: img8,
    title: 'Breakfast',
    rows: 4,
    cols: 2,
  },
  {
    img: img9,
    title: 'Burger',
    rows: 3,
  },
  {
    img: img10,
    title: 'Burger',
    rows: 3,
  },
  {
    img: img3,
    title: 'Camera',
    rows: 3,
  },
  {
    img: img4,
    title: 'Coffee',
    rows: 3,
    cols: 2,
  },

  {
    img: img6,
    title: 'Honey',
    author: '@arwinneil',
    rows: 1,
    cols: 1,
  },

  {
    img: img1,
    title: 'Fern',
  },
  {
    img: img11,
    title: 'Burger',
    rows: 3,
  },
  {
    img: img5,
    title: 'Sea star',
  },
];
