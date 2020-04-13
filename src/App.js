import React from 'react';

import Landing from './pages/Landing';
import Header from './components/header';
import {Container, Title} from './styles/globalStyle';

import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <Container>
      <Header />
      <Landing />
    </Container>
  );
}

export default App;
