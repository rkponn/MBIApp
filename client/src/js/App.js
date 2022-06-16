import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Container } from 'react-bootstrap';
import MBIview from './components/MBIview';

function App() {

  return (
    <Container className="mb-3 py-5">
      <MBIview />
    </Container>
  );
}

export default App;
