import React from 'react';

import styled from 'styled-components';

const Header = () => {

  return(
    <Head>
      <Site>matrickjones.com</Site>
    </Head>
  )
}

const Head = styled.div`
  margin-top: 10px;
`
const Site = styled.h2`
  margin: 0px;
  color: #767676;
`

export default Header;