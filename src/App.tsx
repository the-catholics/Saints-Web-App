import React from 'react';
import GlobalContext from './app/context';
import Routes from './app/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => (
  <GlobalContext>
    <Routes />
  </GlobalContext>
);

export default App;
