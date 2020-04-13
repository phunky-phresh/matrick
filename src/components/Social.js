import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

import { motion } from 'framer-motion';

const Social = () => {
  return(
    <SocialWrap>
      <motion.div whileHover={animation} >
        <Icon className='spotify' style={ iconStyle } />
      </motion.div>
      <motion.div whileHover={animation} >
        <Icon className="apple icon"  style={ iconStyle } />
      </motion.div>
      <motion.div whileHover={animation} >
        <Icon className="instagram"  style={ iconStyle } />
      </motion.div>
    </SocialWrap>
    
  )
}

const animation = {
  scale: 1.2,
}

const iconStyle = {
  fontSize: '30px',
  marginRight: '10px',
  marginLeft: '10px',
  color: '#767676'
}

const SocialWrap = styled.div`
  margin: 40px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`
// const Icon = styled.i`
//   width: 10px;
//   height: 10px;
// `


export default Social;
