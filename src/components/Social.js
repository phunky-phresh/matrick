import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

import { motion } from 'framer-motion';

const Social = () => {
  return(
    <SocialWrap>
     
      <Icon className="spotify"  style={ iconStyle } />
      <Icon className="apple icon"  style={ iconStyle } />
      <Icon className="instagram"  style={ iconStyle } />
      
      {/* <i class="apple icon"></i> */}
    </SocialWrap>
    
  )
}

const iconStyle = {
  fontSize: '30px',
  marginRight: '10px',
  marginLeft: '10px'
}

const SocialWrap = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`
// const Icon = styled.i`
//   width: 10px;
//   height: 10px;
// `


export default Social;
