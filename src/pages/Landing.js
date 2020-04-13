import React from 'react';
import styled from 'styled-components';

import Social from '../components/Social';
import artwork from '../assets/matrickcover.JPG'

const Landing = () => {
  return(
    <Wrap>
      <Image src={artwork} />
      <Social />
    </Wrap>
  )
}

const Wrap = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
`
const Image = styled.img`
  max-width: 400px;
  box-shadow: 0px 0px 9px 2px #c3a8c2;
  border-radius: 2px;
`

export default Landing;