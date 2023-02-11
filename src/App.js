import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Homepage from './pages/Homepage';

import theme from './theme';
import './theme/styles.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Homepage />
    </ChakraProvider>
  );
}

export default App;
