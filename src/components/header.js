import React from 'react';

import styled from 'styled-components';

const Header = () => {

  return(
    <Head>
      <Site>matrickjones</Site>
    </Head>
  )
}

const Head = styled.div`
  margin-top: 10px;
`
const Site = styled.h2`
  margin: 0px;
  color: #767676;
  letter-spacing: 3px;
  @media (max-width: 450px) {
    font-size: 35px;
  }
`

export default Header;