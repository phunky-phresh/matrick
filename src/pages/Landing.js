import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Social from '../components/Social';
import artwork from '../assets/matrickcover.JPG';

const Landing = () => {

  const initAnimation = {
    scale: 1.2,
    rotate: 90
  }


  const [ cover, setCover ] = useState(artwork)
  const [ animate, setAnimation ] = useState(null)

  const _handleClick = (ev, info) => {
    // setAnimation(initAnimation);
    console.log(ev);
    
  }

  return(
    <Wrap>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2, ease: "easeIn"}}
      >
        <Image onClick={_handleClick} src={cover} />
     
        
      
      <Social />
      </motion.div>
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
  max-width: 350px;
  box-shadow: 0px 0px 9px 2px #c3a8c2;
  border-radius: 2px;

  @media (max-width: 450px) {
    max-width: 350px;
    box-shadow: none;
}
`

export default Landing;