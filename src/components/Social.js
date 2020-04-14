import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

import { motion } from 'framer-motion';

const Social = () => {
  return(
    <SocialWrap>
      <a href={link.spotify} target="_blank">
        <motion.div whileHover={animation} >
          <Icon className='spotify' style={ iconStyle } />
        </motion.div>
      </a>
      <a href={link.apple} target="_blank">
        <motion.div whileHover={animation} >
          <Icon className="apple icon"  style={ iconStyle } />
        </motion.div>
      </a>
      <a href={link.instagram} target="_blank">
        <motion.div whileHover={animation} >
          <Icon className="instagram"  style={ iconStyle } />
        </motion.div>
      </a>
    </SocialWrap>
    
  )
}

const link = {
  spotify: 'https://open.spotify.com/artist/5HOo79z3iTAiiAbjvFcQ7j?si=lMXak4wNST6UbGWti1e_Ew&fbclid=IwAR0aLpsdBayIVCwtrC3uRCHrBvFXF9r2FqPBLImuv6S4emJCZfHBU6IpCjk',
  apple: 'https://music.apple.com/au/artist/matrick-jones/1004848310?fbclid=IwAR1T4aYVXrEmJM9N0onP6aLCPx9bFrZlg7ISc9kYhuKZ2HEd5BI8fKfYRfg',
  instagram: 'https://www.instagram.com/matrickjones/'
}

const animation = {
  scale: 1.2,
}

const iconStyle = {
  fontSize: '40px',
  marginRight: '12px',
  marginLeft: '12px',
  color: '#767676'
}

const SocialWrap = styled.div`
  margin: 70px 0 30px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`
// const Icon = styled.i`
//   width: 10px;
//   height: 10px;
// `


export default Social;
