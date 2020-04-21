import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Rotues from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Rotues />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
