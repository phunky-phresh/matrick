import React from 'react';

import styled from 'styled-components';

const Header = () => {

  return(
    <div>
      <Site>matrickjones.com</Site>
    </div>
  )
}

const Site = styled.h2`
  margin: 0;
  color: #767676;
`

export default Header;