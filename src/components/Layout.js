import React from 'react';

import styled from 'styled-components';

const Layout = ({ children }) => {

  return(
    <Theme>
      {children}
    </Theme>
  )
}

export default Layout;

const Theme = styled.div`
  background-color: #ffd0fd;
 
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`